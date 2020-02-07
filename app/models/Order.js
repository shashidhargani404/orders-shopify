const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    total_price: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order