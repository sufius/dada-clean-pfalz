"use strict";
const express = require("express");
const proxy = require("http-proxy-middleware");
const http = require("http");
const fs = require("fs");
const nodemailer = require("nodemailer");
var bodyParser = require("body-parser");
const { body } = require("express-validator");

require("dotenv").config({ path: ".env.local" });

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
TEL.:
${mobile}

E-MAIL:
${email}

NAME:
${name}


${emailText}
`;

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"${name}" <${email}>`, // sender address
    replyTo: email,
    to: process.env.SMTP_USER, // list of receivers
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

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.post(
  "/request/quotation",
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  body("email")
    .not()
    .isEmpty()
    .trim()
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false }),
  body("emailText")
    .not()
    .isEmpty()
    .trim()
    .escape(),
  (req, res) => {
    // console.log("[PMB] Requested URL:", req.url);
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let emailText = req.body.emailText;
    if (!name || !email || !mobile || !emailText) {
      res.sendStatus(500);
    } else {
      main(name, email, mobile, emailText)
        .then(() => {
          res.sendStatus(200);
        })
        .catch(error => {
          console.error(error);
          res.sendStatus(500);
        });
    }
  }
);

// Serve any static files
app.use(express.static("/var/www/dada-clean-pfalz/build"));

// Handle React routing, return all requests to landing page
app.get("/*", function(req, res) {
  console.log(
    "[IMV] Requested URL for /*:",
    new Date().toLocaleString(),
    req.url
  );
  res.sendFile(path.join("/var/www/dada-clean-pfalz/build", "index.html"));
});

http.createServer(app).listen(process.env.PORT || 80);
