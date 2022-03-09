/////////////////////////////////
//import dependencies
/////////////////////////////////
//This allows us to  load our env variables
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')


const Fruit = require('./models/fruit')

////////////////////////////////////////
//create our express application object
////////////////////////////////////////
const app = require('liquid-express-views')(express())

////////////////////////////////////////
//Middleware
////////////////////////////////////////
//this is for request logging
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
//parses urlencoded request bodies
app.use(express.urlencoded({extended:false}))
//to server files from public statically 
app.use(express.static('public'))


////////////////////////////////////////
//Routes
////////////////////////////////////////
app.get('/', (req,res) => {
    res.send('your server is running')
})



////////////////////////////////////////
//Server listener
////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening   on port: ${PORT}`)
})


