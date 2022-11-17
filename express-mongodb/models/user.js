const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    }, 
    emailID: {
        type: String,
        required: [true, 'Please enter record id!'],
        unique: [true]
    },
    passwordID: {
        type: String,
        required: true
    }

},{timestamps: true})

const User = mongoose.model('User',userSchema);
module.exports= User;