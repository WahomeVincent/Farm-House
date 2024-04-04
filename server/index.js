const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const newproductModel = require('./models/newproductmodel')
const Payment = require('./models/paymentmodel')

// Express app
const app = express()
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())
app.use(express.json());


const PORT = process.env.PORT || 8000



// Db connection
mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Database is connected"))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send("Server is running . I1,22,2,")
})


app.post('/newproduct', async (req, res) => {
    const data = newproductModel(req.body)
    const dataSave = await data.save()
    // res.send({message : 'Product added to db successfully.'})
    res.send(dataSave)
})


app.get('/products', async (req, res) => {
    const data = await newproductModel.find({})
    res.send(JSON.stringify(data))
})


// Mpesa

// Middleware function to generate token


// Test the middleware for generating a token
// app.get('/token', (req, res) => {
//     generateToken()
// })

async function generateToken(req, res, next) {
    const consumerSecret = process.env.CONSUMER_SECRET
    const consumerKey = process.env.CONSUMER_KEY
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')

    await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
        headers: {
            Authorization: `Basic ${auth}`
        }
    }).then((data) => {
        // console.log(data.data.access_token)
        token = data.data.access_token
        next()
    }).catch((error) => {
        console.log(error)
    })
}


app.post('/stkpush', generateToken, async (req, res) => {
    
    console.log(req.body);
    const amount = req.body.amount
    const phonenumber = req.body.phone.substring(1)

    const date = new Date();
    const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

    const shortcode = process.env.MPESA_SHORTCODE
    const passkey = process.env.MPESA_PASSKEY

    const password = Buffer.from(shortcode + passkey + timestamp).toString("base64");

    await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
        {
            BusinessShortCode: shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: `254${phonenumber}`,
            PartyB: shortcode,
            PhoneNumber: `254${phonenumber}`,
            CallBackURL: 'https://hungry-lines-itch.loca.lt/callback',
            AccountReference: 'Vince Holdings',
            TransactionDesc: 'Test 1'
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    ).then((data) => {
        console.log(data)
        res.status(200).json(data.data)
    }).catch((error) => {
        console.log(error.message);
        res.status(400).json(error.message)
    })
})



app.post('/callback', async(req, res) => {
    const callbackData = req.body
    if (!callbackData.Body) {
        console.log(callbackData.Body);
        return res.json('ok');
    }
  
    const phone = callbackData.Body.stkCallback.CallbackMetadata.Item[4].Value
    const amount = callbackData.Body.stkCallback.CallbackMetadata.Item[0].Value
    const transaction_ID = callbackData.Body.stkCallback.CallbackMetadata.Item[1].Value

    const paymentData = new Payment()

    paymentData.number = phone
    paymentData.amount = amount
    paymentData.transaction_ID = transaction_ID

    paymentData.save()
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err.message);
        })
    
    res.json(callbackData)

})





app.listen(8000, (req, res) => {
    console.log('Server is running on port : ' + PORT);

})