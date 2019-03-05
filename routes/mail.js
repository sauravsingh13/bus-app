const nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
 console.log(req.body)
   nodemailer.createTestAccount((err, acoount)=>{
       const htmlEmail = `
       <h3>You have successfully booked a ticked</h3>
       <p>Your seats booked are</p>
       <p> ${req.body.seatBooked} </p>`
         let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'deshaun20@ethereal.email', // generated ethereal user
      pass: 'PAySuZ3pkqbB1jEmA1' // generated ethereal password
    }
  });
    let mailOptions = {
    from: '"Saurav Kumar 👻" <saurav1895@gmail.com>', // sender address
    to: 'deshaun20@ethereal.email', // list of receivers
    subject: "Bus-Booking ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: htmlEmail // html body
  };
      transporter.sendMail(mailOptions,(err, info) => {
          if(err){
              return console.log(err)
          }
          console.log('Message Sent',nodemailer.getTestMessageUrl(info))
      })

   });


});

module.exports = router;

