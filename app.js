require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

const Logger = require('./middleware/Logger')
const Header=require('./middleware/Header')
const todoRoutes=require('./routes/index.js')

app.use( express.json() )

app.use(Logger)

app.use(Header)

app.use(todoRoutes)

app.listen(PORT, () => console.log("Running on port " + PORT))


