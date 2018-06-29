const express = require('express');
const emailer = require('nodemailer');
const pug = require('pug');

const router = express.Router();
const transporter = emailer.createTransport({
  //service: 'gmail',
  host:'mail.privateemail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@upgency.com',
    pass: 'asandwichisbetter'
  }
});
const html = pug.compile('views/contact_email.pug');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Upgency' });
});

router.post('/', function(req, res, next) {
  const body = req.body;
  const subject = body.company ? body.name+' from '+body.company+' has contacted us!' : body.name+' has contacted us!';
  console.log(subject);
  const mailOptions = {
    from: 'Contact Requests <contactus@upgency.com>',
    to: 'Upgency <hello@upgency.com>',
    subject: subject,
    html: html({name: body.name, email:body.email, company: body.company, message: body.message})
  };

  console.log(html({name: body.name, email:body.email, company: body.company, message: body.message}));

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: "+info.response);
    }
  });
});

module.exports = router;
