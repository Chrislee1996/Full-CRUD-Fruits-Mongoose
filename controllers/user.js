////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()


////////////////////////////////////////////
//Routes
////////////////////////////////////////////

//two sign up routes
    //get to render the signup form
router.get('/signup', (req,res)=> {
    res.send('sign up page')
})
    //post to send the signup info
router.post('/signup', (req,res)=> {
    res.send('signup -> post')
})


//two login routes
    //get to render the login form
router.get('/login', (req,res)=> {
    res.send('login page')
})
    //post to send the login info (and create a session)
router.post('/login', (req,res)=> {
    res.send('login -> post')
})


//signout info -> destroy the session


////////////////////////////////////////////
// Export the Router
////////////////////////////////////////////
module.exports = router 