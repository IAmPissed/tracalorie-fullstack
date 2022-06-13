const express = require('express')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { connectDB } = require('./config/db')
const expressLayouts = require('express-ejs-layouts')

const PORT = process.env.PORT || 3000
const app = express()
const publicDirectoryPath = path.join(__dirname, 'public')
const stylesDirectoryPath = path.join(publicDirectoryPath, 'styles')

connectDB()


app.use(express.static(stylesDirectoryPath))

app.use(expressLayouts)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.redirect('/api/users/login'))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/food-items', require('./routes/foodItemRoutes'))

app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`.bold))