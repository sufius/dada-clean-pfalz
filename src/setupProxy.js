"use strict";
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const { body } = require("express-validator");
require("dotenv").config({ path: '.env.local' });

// async..await is not allowed in global scope, must use a wrapper
async function main(name, email, mobile, emailText) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE, // use SSL
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
      }
  });

  let message = `
NAME:
${name}

E-MAIL:
${email}

TEL.:
${mobile}


${emailText}
`;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    replyTo: email,
    to: SMTP_RECEIVER, // list of receivers
    subject: `Nachricht von ${name}`,
    text: message // plain text body
  });

  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  //
  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// this is used just in mode: NODE_ENV === "development"
module.exports = function(app) {
  app.use(bodyParser.json()); // to support JSON-encoded bodies
  app.use(
    bodyParser.urlencoded({
      // to support URL-encoded bodies
      extended: true
    })
  );
  app.post(
    "/request/quotation",
    body("name").not().isEmpty().trim().escape(),
    body("email").not().isEmpty().trim().isEmail().normalizeEmail({ gmail_remove_dots: false}),
    body("emailText").not().isEmpty().trim().escape(),
    (req, res) => {
      // console.log("[PMB] Requested URL:", req.url);
      let name = req.body.name;
      let email = req.body.email;
      let mobile = req.body.mobile;
      let emailText = req.body.emailText;
      if (!name || !email || !mobile || !emailText) {
          res.sendStatus(500);
      } else {
        main(name, email, mobile, emailText).then(() => {
          res.sendStatus(200);
        }).catch(error => {
          console.error(error);
          res.sendStatus(500);
        });
      }
    }
  );
};
