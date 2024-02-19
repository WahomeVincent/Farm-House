const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

// Express app
const app = express()
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

app.post('/newproduct', (req, res) => {
    const data = newproductModel(req.body)
    const dataSave = data.save()
    res.send({message : 'Product added to db successfully.'})
})

app.get('/products', async (req, res) => {
    const data = await newproductModel.find({})
    res.send(JSON.stringify(data))
})


app.listen(8000, (req, res) => {
    console.log('Server is running on port : ' + PORT);
})