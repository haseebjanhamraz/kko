const express = require("express");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require("body-parser");
const cors = require("cors");

const appName = "Khudai Khidmatgar Organization";

const app = express();
app.use(cors());

// Set up an SMTP transport using your custom email server details
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: "pakhtoonmagazine@gmail.com",
      pass: "vpvgvwjotngwlgtp",
    },
  })
);
transporter.verify().then(console.log).catch(console.error);

// Use the body-parser middleware to parse the request body as JSON
app.use(bodyParser.json());

// Define a route for sending emails
app.post("/send-email", (req, res) => {
  const { name, email, message, contactType } = req.body;

  const htmlBody = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
    Type: ${contactType}
  `;

  // Set up the email message
  const mailOptions = {
    from: `"${appName}" Mailing System`,
    to: email,
    subject: "Contact Form Submission",
    text: htmlBody,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res
        .status(500)
        .send({ error: "Something went wrong. Please try again later." });
    } else {
      res.send({ message: "Email sent successfully" });
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
