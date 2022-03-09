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

app.get('/fruits/seed', (req, res)=> {
    //arr of starter fruits
    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false }
      ]

    //when we seed data, there are a few steps involved
    //delete all data that already exist ( will only happen if data exists)
    Fruit.remove({})
      .then(data=> {
          console.log('this is what remove returns', data)
          //then we create with our seed data
          Fruit.create(startFruits)
            .then(data => {
                console.log('this is what create returns', data)
                res.send(data)
            })

      })
    //then we create with our seed data
    //then we can send if we want to see that data
})


//index route
app.get('/fruits', (req, res)=> {
    //find the fruits
    Fruit.find({})
        .then(data =>{
            console.log(data)
            res.render('fruits/index.liquid', { data })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
    //then render a template AFTER they are found 
    //show an error if there is one 
})

////////////////////////////////////////
//Server listener
////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is listening   on port: ${PORT}`)
})


