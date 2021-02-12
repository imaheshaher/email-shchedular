const nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:"iittech100@gmail.com",
        password:"Gmail@1234"
    }
})    
var mailOptions = {
    from:"iittech100@gmail.com",
    to:"aher5089@gmail.com",
    subject:"sending mail using node js",
    text:'that was so funny with node'
}

transport.sendMail(mailOptions,(err,info) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log("Mail send : "+info.response)
    }
})
