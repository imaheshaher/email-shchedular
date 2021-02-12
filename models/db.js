const mongoose = require('mongoose')

const conn = mongoose.connect("mongodb://localhost:27017/Emailshedule",{
    useNewUrlParser:true
},err => {
    if(!err) {
        console.log("connected...")
    }
    else {
        console.log(err)
    }
})

module.exports = conn