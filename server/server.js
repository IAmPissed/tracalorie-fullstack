const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`.bold))