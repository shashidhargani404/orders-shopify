const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

require('./config/database')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const router = require('./config/routes')

const Order = require('./app/models/Order')
const _ = require('lodash')
app.post('/new-order', (req, res) => {
    const { name, total_price, customer: { first_name, last_name, email, phone } } = req.body
    const body = { name, total_price, first_name, last_name, email, phone }

    const order = new Order(body)
    order.save()
        .then((order) => {
            res.send('ok')
            io.sockets.emit('new order', order)
        })
        .catch((err) => {
            res.send(err)
        })
})

app.use('/', router)

const path = require('path')
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

io.on('connection', socket => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port, _ => console.log('listening to the port ', port))