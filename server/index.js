const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

// Express app
const app = express()
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors())
app.use(express.json());


const PORT = process.env.PORT || 8000



// Db connection
console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("Database is connected"))
    .catch(err => console.log(err))


// Schema
const newproductSchema = mongoose.Schema({
    name : String,
    category : String,
    price : Number,
    image: String,
    description: String,
})

//Model

const newproductModel = mongoose.model('newproduct', newproductSchema)


app.get('/', (req, res) => {
    res.send("Server is running")
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

    await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",{
        headers : {
            Authorization : `Basic ${auth}`
        }
    }).then((data) => {
        // console.log(data.data.access_token)
        token = data.data.access_token
        next()
    }).catch((error) => {
        console.log(error)
    })
}


app.post('/stkpush',generateToken, async (req, res) => {
    const {phonenumber, amount} = req.body
    console.log(req.body);

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
            TransactionType: "CustomerPayBillOnline",    
            Amount: amount,    
            PartyA: phonenumber,    
            PartyB: shortcode,    
            PhoneNumber:phonenumber,    
            CallBackURL: "https://mydomain.com/pat",    
            AccountReference: 'Vince Holdings',    
            TransactionDesc:"Test"
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
     ).then((data) => {
        console.log(data)
        res.status(200).json(data)
     }).catch((error) => {
        console.log(error.message);
        res.status(400).json(error.message)
     })
})



app.listen(8000, (req, res) => {
    console.log('Server is running on port : ' + PORT);
    
})