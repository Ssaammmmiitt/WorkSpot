const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const db = require('./data'); // Replace './db' with the path to your database connection file
const { MongoClient } = require('mongodb'); // Import the MongoClient module
const { databaselink } = require('./data');
const { Admin_email } = require('./data');
const { Admin_password } = require('./data');
const { databaseName } = require('./data');
const nodemailer = require('nodemailer');

// app.use(express.json());
// function SignUP(req, res) {
//     /*
//     const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'homePage.html'); // here we will be reading the Home page index.html -> home page
//     fs.readFile(filePath, function (err, data) {
//         // Assuming you have a database connection, you can check for the person's entry in the database using the received JSON data
//         const { username, password } = req.body; // Assuming the JSON data contains 'username' and 'password' fields
//         // Perform the necessary database query to add the person's entry
//         try {
//             const uri = databaselink; // Replace with your MongoDB connection URI
//             const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Create a new MongoClient instance

//             client.connect(function (err) {
//                 if (err) {
//                     // Handle error if the database connection fails
//                     throw err;
//                 } else {
//                     const db = client.db(databaseName); // Replace 'your-database-name' with your actual database name

//                     db.collection('users').findOne({ username }, function (err, result) {
//                         if (err) {
//                             // Handle error if the database query fails
//                             throw err;
//                         } else {
//                             // Check if the person exists in the database
//                             const personExists = result !== null;

//                             // Example response based on the query result
//                             if (personExists) {
//                                 // Generate a JWT token
//                                 const token = generateToken(username);

//                                 // Create a session for the user
//                                 req.session.cookie.maxAge = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
//                                 req.session.user = username;

//                                 // Send the response with the JWT token
//                                 res.status().json({ status: 'conflict', message: 'User already exists' }).send({ status: 'conflict', message: 'User already exists' });
//                             } else {
//                                 // Add the person's entry to the database
//                                 db.collection('users').insertOne({ username, password }, function (err, result) {
//                                     if (err) {
//                                         // Handle error if the database query fails
//                                         throw err;
//                                     } else {
//                                         // Generate a JWT token
//                                         const token = generateToken(username);

//                                         // Create a session for the user
//                                         req.session.cookie.maxAge = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
//                                         req.session.user = username;

//                                         // Send the response with the JWT token
//                                         res.status(200).json({ status: 'registered', token });
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 }
//             });
//         } catch (err) {
//             res.status(401).json({ status: 'unregistered' }).send();
//         }

//     });

// */}





function generateToken(username) {
    // Generate a JWT token with the username
    const token = jwt.sign({
        username
    }, 'secret key', {
        expiresIn
            : '2h'
    });
    return token;
}

// function forgotPassword(req, res) {
//     const { email } = req.body; // Assuming the JSON data contains 'email' field

//     // Assuming you have a database connection, you can check for the person's entry in the database using the received email
//     db.collection('users').findOne({ email }, function (err, result) {
//         if (err) {
//             // Handle error if the database query fails
//             throw err;
//         }

//         // Check if the person exists in the database
//         const personExists = result !== null;

//         if (personExists) {
//             // Generate an OTP (One-Time Password)
//             const otp = generateOTP();

//             // Send the OTP to the user's email
//             sendOTP(email, otp, req, res);

//             // Store the OTP in the session for verification
//             req.session.cookie.maxAge = 5 * 60 * 1000; // 5 minutes in milliseconds
//             req.session.otp = otp;

//             // Send the response with success status
//             res.status(200).json({ status: 'OTP sent' });
//         } else {
//             res.status(404).json({ status: 'User not found' });
//         }
//     });
// }

function generateOTP() {
    // Generate a random OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    return otp;
}

// function sendOTP(email, otp, req, res) {
//     // Send the OTP to the user's email

//     // Example code using Nodemailer to send an email
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: Admin_email,
//             pass: Admin_password
//         }
//     });

//     const mailOptions = {
//         from: Admin_email, // Replace with your email address
//         to: email,
//         subject: 'OTP Verification',
//         text: `Your OTP is: ${otp}`
//     };


//     transporter.sendMail(mailOptions, function (error, info) {
//         try {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('Email sent: ' + info.response);
//                 // Assuming you have a database connection, you can store the OTP in the database
//                 db.collection('users').updateOne({ username }, { $set: { otp } }, function (err, result) {
//                     if (err) {
//                         // Handle error if the database query fails
//                         throw err;
//                     }

//                     // Check if the session OTP matches with the received OTP
//                     if (req.session.otp !== otp) {
//                         // OTP matches, perform necessary actions
//                         db.collection('users').updateOne({ username }, { $set: { otp: req.session.otp } }, function (err, result) {
//                             if (err) {
//                                 // Handle error if the database query fails
//                                 throw err;
//                             }
//                         });
//                     }
//                 });
//             }

//         } catch (err) {
//             console.log(err);
//         }
//     });
// }




// function Logout(req, res) {
//     // Destroy the session
//     if (!req.session.destroy()) {
//         res.status(500).json({ status: 'error' });
//     }

//     const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'test.html');
//     fs.readFile(filePath, function (err, data) {
//         if (err) {
//             // Handle error if the file cannot be read
//             res.status(500).send(err.message);
//         } else {
//             // Set the appropriate content type for the file
//             res.status(200).set('Content-Type', 'text/html').send(data.toString());
//         }
//     });
// }

// function profile(req, res) {
//     // Handle POST request to the '/profile' URL
//     const { username } = req.body; // Assuming the JSON data contains 'username' field

//     // Assuming you have a database connection, you can retrieve the user's profile information from the database
//     db.collection('users').findOne({ username }, function (err, result) {
//         if (err) {
//             // Handle error if the database query fails
//             throw err;
//         }

//         // Example response based on the query result
//         if (result !== null) {
//             // Exclude the password field from the response
//             const { password, ...profile } = result;
//             res.status(200).json({ status: 'success', profile });
//         } else {
//             res.status(404).json({ status: 'not found' });
//         }
//     });
// }


// function verifyOTP(req, res) {
//     const { otp } = req.body; // Assuming the JSON data contains 'otp' field

//     // Assuming you have a database connection, you can retrieve the stored OTP from the user's session or database
//     const storedOTP = req.session.otp; // Replace with the code to retrieve the stored OTP

//     // Compare the received OTP with the stored OTP
//     if (otp === storedOTP) {
//         // OTP is valid, perform necessary actions
//         // Fetch the user from the database using the received username
//         db.collection('users').findOne({ username }, function (err, user) {
//             if (err) {
//                 // Handle error if the database query fails
//                 throw err;
//             }

//             // Example response based on the query result
//             if (user !== null) {
//                 // Store the OTP with the user in the database
//                 user.otp = otp;
//                 db.collection('users').updateOne({ username }, { $set: { otp } }, function (err, result) {
//                     if (err) {
//                         // Handle error if the database query fails
//                         throw err;
//                     }

//                     // Perform necessary actions with the user's OTP
//                     // ...
//                 });
//             } else {
//                 res.status(404).json({ status: 'User not found' });
//             }
//         });

//         // Destroy the OTP from the user's session or database
//         req.session.otp = null; // Replace with the code to destroy the OTP from the user's session or database

//         // Send the response with success status
//         res.status(200).json({ status: 'OTP verified' });
//     } else {
//         // OTP is invalid, send the response with error status
//         res.status(401).json({ status: 'Invalid OTP' });
//     }
// }

module.exports = { generateToken, generateOTP };