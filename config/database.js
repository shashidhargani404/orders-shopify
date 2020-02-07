const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shopifyuser:shopifyuser@cluster-shopify-orders-51llu.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    })

module.exports = mongoose