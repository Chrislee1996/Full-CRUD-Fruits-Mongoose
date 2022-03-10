/////////////////////////////////
//import dependencies
/////////////////////////////////
const mongoose = require('./connection')

/////////////////////////////////
//define user model
/////////////////////////////////
//pull the schema and model constructors from mongoose
//we're going to use something called  destructoring to accomplush this
const {Schema, model} = mongoose

//make a user Schema
const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true
        },
        password: {
            type: String,
            required:true
        }
    }
)

//Make a user model
const User = model('User', userSchema)


/////////////////////////////////
//export our user model
/////////////////////////////////
module.exports = User 