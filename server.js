const express = require('express')
const server = express()
const ejs = require('ejs')
require('dotenv').config()
const todosRouter = require("./Routes/todolist")
const port = process.env.PORT || 3000
server.set('view engine', 'ejs');


server.use(express.urlencoded({extended : true }))

server.use(express.json())
server.use('/',todosRouter)

server.use(express.static('public'))
// server.use('/',uploadRouter)



server.listen(port , () => console.log("the port is opened in "+ port))