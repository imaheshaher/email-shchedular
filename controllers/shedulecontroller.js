const nodemailer = require("nodemailer")
const sendgridMail = require("./sendgrid")
const mongoose = require('mongoose')
const emailSchedule= require('../models/shedulemodel')
const emailshedule = require("../models/shedulemodel")
const schedule = (req,res) => {
    res.json({"msg":"email schedule"})

}

const addshedule = (req,res) => {
    console.log(req.body)
    const date = new Date(req.body.send_time)
    const {toemail,subject,content} = req.body

    const emaildata = new emailshedule({toemail,subject,content,send_time:date})
    try {
        emaildata.save()
        res.json(emaildata)
    }
    catch(error) {
        res.json(error)
    }
    
}

const updateSchedule = (req,res) => {

    let id = req.params.id
    console.log(req.body)
    const date =new Date(req.body.send_time)
    const {toemail,subject,content} = req.body

    emailshedule.updateMany({_id:id},{$set:{toemail:toemail,subject:subject,content:content,send_time:date}},(err,result )=> {
        if(err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
}

const listSchedule = (req,res) => {
     emailshedule.find({}).then(result => {
        res.json(result)
    })
}

const delteSchedule = (req,res) => {
    let id = req.params.id
    emailshedule.deleteOne({_id:id}).then(result => {
        res.json({msg:"deleted",
                 data:result})
    })
}
const sendEmail =  (req,res) => {
    const date = new Date('2020-11-02')
    const data = emailshedule.find({send_time:date}).then(result => {
    const mail = sendgridMail(result)
    console.log(mail)
    res.json({msg:mail})
    
    })
    

}

const setTime = (req,res) => {
    setInterval(() => {
        res.json({msg:"time interval"})
    },3000)
}
module.exports = {schedule,addshedule,sendEmail,setTime,updateSchedule,listSchedule,delteSchedule}