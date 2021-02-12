const sgMail = require('@sendgrid/mail');
const {env} = require('../config')

const sendgridMail =  (result) => {

  var data =[]
    result.forEach(d => {
    console.log(d.toemail)


    sgMail.setApiKey(env.api_key);
    const msg = {
      to: d.toemail,
      from: { email: 'iittech100@gmail.com', name: "mahesh" },
      subject: d.subject,
      text: d.content
     
    };
    data.push("dipak")
    
    sgMail.send(msg)
      .then(result => {
        console.log(result.Response.statusCode)
        // console.log(result[0].statusCode)
        // data.push(result[0].statusCode)

      }).catch(error => {
        console.log(error.response.body)
      })
  });
return data
  
}

module.exports = sendgridMail