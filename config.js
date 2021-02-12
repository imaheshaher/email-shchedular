const dotenv = require('dotenv').config()
console.log(process.env.API_SECRETE_KEY)
module.exports.env = {
    api_key:process.env.API_KEY


}
