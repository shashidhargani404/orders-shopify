const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// require('./config/database')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const router = require('./config/routes')

app.use('/', router)

app.get('/user', (req, res) => {
    res.send('Home user')
})

app.post('/new-order', (req, res) => {
    res.send('ok')
    console.log('new-order placed')
})

const path = require('path')
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

app.listen(port, _ => console.log('listening to the port ', port))