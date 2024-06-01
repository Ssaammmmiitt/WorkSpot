const { scrappper } = require('./test/web_scrapper');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000; // You can use any port you prefer
const { MongoClient } = require('mongodb');
const { databaselink, Admin_email, Admin_password, databaseName } = require('./data');
const nodemailer = require('nodemailer');
const { get } = require('http');
//const { get_profile_data } = require('./profile');
//const Job = require('./Everything_else');
/*

When the ******app.get****** is called it will send the file to the client
when the ******app.post***** is called it will process data that is sent by the client and then redirect to the file that is needed

*/
app.use(express.json());
// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Handle GET requests to the root URL and serve index.html
app.get('/', (req, res) => {
    //frontend\dist\index.html
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'index.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

// Serve static files
app.get('/test.html', (req, res) => {
    sendHtmlFile(res, path.join(__dirname, 'test.html'));
});

// Handle POST requests to the '/signup' URL

app.post('/signup', (req, res) => {
    /*
    const { username, password } = req.body;

    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'homePage.html'); // path to home page

    fs.readFile(filePath, function (err, data) {
        if (err) {
            res.status(500).send(err.message);
            return;
        }

        try {
            const client = new MongoClient(databaselink, { useNewUrlParser: true, useUnifiedTopology: true });

            client.connect(function (err) {
                if (err) {
                    res.status(500).send('Database connection failed');
                    return;
                }

                const db = client.db(databaseName);

                db.collection('users').findOne({ username }, function (err, result) {
                    if (err) {
                        res.status(500).send('Database query failed');
                        return;
                    }

                    if (result) {
                        // User already exists
                        res.status(409).json({ status: 'conflict', message: 'User already exists' });
                    } else {
                        // Add the new user
                        db.collection('users').insertOne({ username, password }, function (err, result) {
                            if (err) {
                                res.status(500).send('Failed to add user');
                                return;
                            }

                            // Generate JWT token
                            const token = generateToken(username);

                            // Create a session for the user
                            req.session.user = username;

                            // Send the response with the JWT token
                            res.status(200).json({ status: 'registered', token });
                        });
                    }
                });
            });
        } catch (err) {
            res.status(401).json({ status: 'unregistered' });
        }
    });*/

    const { email, password } = req.body;

});

app.get('/signup', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'frontend', 'dist', 'signup.html'), function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            throw err;
        } else {
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

app.get('/login', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'), function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            throw err;
        } else {
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});


// Handle POST requests to the '/login' URL
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const filePath_to_send = path.join(__dirname, '..', 'frontend', 'dist', 'index.html');

    // Perform the necessary database query to check for the person's entry
    /* db.collection('users').findOne({ username, password }, function (err, result) {
         if (err) {
             // Handle error if the database query fails
             throw err;
         }
 
         // Check if the person exists in the database
         const personExists = result !== null;
         // Example response based on the query result
         if (personExists) {
             // Generate a JWT token
             const token = generateToken(username);
             filePath_to_send = path.join(__dirname, '..', 'frontend', 'dist', 'homePage.html');
 
             // Create a session for the user
             req.session.user = username;
 
             // Send the response with the JWT token
             res.status(200).json({ status: 'authorized', token });
         } else {
             // Send the response with error status
             res.status(401).json({ status: 'unauthorized' });
         }
     });*/
    /*
    if(res.status !== 200){
           filePath_to_send = path.join(__dirname, '..', 'frontend', 'dist', 'index.html'); // have to change index.html to login.html
       }
    */
    if (email === 'admin@gmail.com' && password === 'admin') {
        filePath_to_send = path.join(__dirname, '..', 'frontend', 'dist', 'homePage.html');

    }
    else {
        filePath_to_send = path.join(__dirname, '..', 'frontend', 'dist', 'test.html');
    }
    sendHtmlFile(res, filePath_to_send);
});

app.post('/contact', (req, res) => {
    const { email, message } = req.body;
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'contact.html');

    // Send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
});

app.get('/ForgotPassword', (req, res) => {
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'ForgotPassword.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

app.post('/ForgotPassword', (req, res) => {
    const { email } = req.body;
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'ForgotPassword.html');
    // Send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
});

app.get('/OTP', (req, res) => {
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'OTP.html');
    //send an email with OTP
    //...

    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    }
    );
});

app.post('/OTP', (req, res) => {
    const { otp } = req.body;
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'OTP.html');

    //Check if the OTP is correct
    //...

    // Send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
});

app.get('/contact', (req, res) => {
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'contact.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

function sendHtmlFile(res, filePath) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Send the file content
            res.send(data.toString());
        }
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const Job_Scrapper = () => {
    console.log("Job is running");
    // web scraping code goes here 
    scrappper();
}


// other post and get requests
app.post('/profile', (req, res) => {
    // Handle POST request to the '/profile' URL
});

app.post('/test', (req, res) => {
    // Handle GET request to the '/test' URL
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'test.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

app.get('/logout', (req, res) => {
    // Handle GET request to the '/logout' URL
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'index.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});

app.get('/profile', (req, res) => {
    // Handle GET request to the '/profile' URL
    const profile_data = get_profile_data();
    const filePath = path.join(__dirname, '..', 'frontend', 'dist', 'profile.html');
    fs.readFile(filePath, function (err, data) {
        if (err) {
            // Handle error if the file cannot be read
            res.status(500).send(err.message);
        } else {
            // Set the appropriate content type for the file
            res.status(200).set('Content-Type', 'text/html').send(data.toString());
        }
    });
});



// Call Job every 24 hours
setInterval(Job_Scrapper, 24 * 60 * 60 * 1000);