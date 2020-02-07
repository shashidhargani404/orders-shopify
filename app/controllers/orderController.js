const Order = require('../models/Order')
const _ = require('lodash')

module.exports.list = (req, res) => {
    Order.find()
        .then((orders) => {            
            res.send(orders)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.update = (req, res) => {
    const body = _.pick(req.body, [ 'first_name', 'last_name', 'email', 'phone'])
    const id = req.params.id
    Order.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((order) => {
            res.send(order)
        })
        .catch((err) => {
            res.send(err)
        })
}