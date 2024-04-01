const mongoose = require('mongoose')

const newproductSchema = mongoose.Schema({
    name : String,
    category : String,
    price : Number,
    image: String,
    description: String,
})

const newProduct = mongoose.model('newproduct', newproductSchema)


module.exports = newProduct