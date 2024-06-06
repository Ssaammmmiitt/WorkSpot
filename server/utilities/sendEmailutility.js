const nodemailer = require('nodemailer');
require("dotenv").config();


const user=  process.env.MAIL
const pass = process.env.PASSWORD


const sendEmail = async (recipient, subject, text) => {
  // Create a transporter for sending email
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass
    },
  });

  const mailOptions = {
    from: user,
    to: recipient,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error occurred while sending email:", error);
  }
};


const sendOtp = (fullName, otp) => {
  return `Dear ${fullName},
  Your OTP code is ${otp}`;
};



module.exports = { sendEmail, sendOtp };