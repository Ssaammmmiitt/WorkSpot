// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const userRoutes = require('./routes/user');
const feedbackRoute = require('./routes/feedback')
const scraperJob = require('./web_scrapper')

//app
const app = express();
app.use(cors());
app.use(express.json());
//db
mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => console.log("Database is connected"))
    .catch((err) => console.log("Database connection Error", err));
//midddleware
app.use(express.json())
app.use(morgan("dev"));
// CORS configuration
app.use(cors());

//routes
app.use('/user', userRoutes)
app.use('/contact-us', feedbackRoute)

//port
const port = 3000;

//listener
const server = app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);

setInterval(() => {
    scraperJob();
}, 24 * 60 * 60 * 1000);
