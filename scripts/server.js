const express = require("express");
const proxy = require("http-proxy-middleware");
const http = require("http");
const fs = require("fs");
var bodyParser = require("body-parser");
const path = require("path");
const { body } = require("express-validator");
const sendMail = require("./sendMail");

require("dotenv").config({ path: ".env.local" });

const app = express();

// Serve any static files
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.post("/request/quotation",
  body("name").not().isEmpty().trim().escape(),
  body("email").not().isEmpty().trim().isEmail().normalizeEmail({ gmail_remove_dots: false }),
  body("mobile").not().isEmpty().trim().escape(),
  body("emailText").not().isEmpty().trim().escape(),
  (req, res) => {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "dev"
    ) {
      console.log("[PMB] Requested URL:", req.url);
    }
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let emailText = req.body.emailText;
    if (!name || !email || !mobile || !emailText) {
      res.sendStatus(500);
  } else {
    sendMail(name, email, mobile, emailText)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        if (
          process.env.NODE_ENV === "development" ||
          process.env.NODE_ENV === "dev"
        ) {
          console.error(err);
        }
        res.status(500).send(err);
      });
  }
});

// Handle React routing, return all requests to landing page
app.get("/*", function(req, res) {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev"
  ) {
    console.log(
      "[IMV] Requested URL for /*:",
      new Date().toLocaleString(),
      req.url
    );
  }
  res.sendFile(path.join(__dirname, "..", "build", "index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

http.createServer(app).listen(process.env.PORT || 80);
