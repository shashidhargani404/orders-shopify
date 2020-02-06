const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shashidhargani404:shashidhargani404@cluster-moneymath-pluii.mongodb.net/test?retryWrites=true&w=majority', {
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