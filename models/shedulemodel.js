
const { text } = require('express')
const mongoose = require('mongoose')


const emailShedule = new mongoose.Schema({
    toemail:{
        type:Array(),
        required:true
    },
    subject:{
        type:String,
        
    },
    content : {
        type:String,
        required:true
    },
    send_time:{
        type:Date,
        required:true
    },
    attchFile:{
        type:String
    }
})


const emailshedule = mongoose.model("emailshedule",emailShedule)

module.exports = emailshedule