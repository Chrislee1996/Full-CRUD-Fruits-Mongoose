////////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////////
const express = require('express')

////////////////////////////////////////////
// Create router
////////////////////////////////////////////
const router = express.Router()



////////////////////////////////////////////
//Router
////////////////////////////////////////////
router.get('/', (req, res)=> {
    res.render('index.liquid')
})



////////////////////////////////////////////
// Export router
////////////////////////////////////////////
module.exports = router