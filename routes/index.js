const express = require('express');
const emailer = require('nodemailer');
const pug = require('pug');

const router = express.Router();
const transporter = emailer.createTransport({
  //service: 'gmail',
  host:'mail.privateemail.com',
  port: 993,
  secure: false,
  auth: {
    user: 'hello@upgency.com',
    pass: 'asandwichisbetter'
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Upgency' });
});

router.post('/', function(req, res, next) {
  const body = req.body;
  const mailOptions = {
    from: body.email,
    to: 'Upgency <hello@upgency.com>',
    subject: body.name+' has contacted us!',
    html: pug.renderFile('', {name: body.name, body: body.message})
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: "+info.response);
    }
  });
});

module.exports = router;
