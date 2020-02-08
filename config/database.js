const mongoose = require('mongoose')

mongoose.connect('mongodb:localhost:27017/shopify', {
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