const express = require("express")

const app = express();

const router = express.Router()
const {schedule,addshedule,sendEmail,setTime,updateSchedule,listSchedule,delteSchedule} = require("./controllers/shedulecontroller")
router.get('/schedule',schedule)
router.post('/addschedule',addshedule)
router.get('/sendEmail',sendEmail)
router.get('/setTime',setTime)
router.put('/updateschedule/:id',updateSchedule)
router.get('/list',listSchedule)
router.delete('/delete/:id',delteSchedule)
module.exports = router