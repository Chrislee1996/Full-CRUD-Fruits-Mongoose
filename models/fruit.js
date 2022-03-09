/////////////////////////////////
//import dependencies
/////////////////////////////////
const mongoose = require('./connection')

/////////////////////////////////
//define fruits model
/////////////////////////////////
//pull the schema and model constructors from mongoose
//we're going to use something called  destructoring to accomplush this
const {Schema, model} = mongoose

//make our fruits schema
const fruitSchema = new Schema(
    {
        name: {type: String},
        color: {type: String},
        readyToEat: {type: Boolean},
    },
    {timestamps:true}
)

//make our fruit model
const Fruit = model('Fruit', fruitSchema)

/////////////////////////////////
//export our model
/////////////////////////////////
module.exports = Fruit