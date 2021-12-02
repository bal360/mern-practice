const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db/mongoose')
const todoRouter = require('./routes/todos')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/todos', todoRouter)

app.listen(port, function() {
  console.log(`Server listening on port ${port}...`)
})