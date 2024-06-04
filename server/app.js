// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors= require('cors');
require("dotenv").config();
const userRoutes = require("../server/routes/user")
const multer = require("multer");

//app
const app = express();



//db
mongoose.connect(process.env.MONGO_URI,{
})
.then(()=> console.log("Database is connected"))
.catch((err) =>console.log("Database connection Error", err));



//midddleware
app.use(express.json())
app.use(morgan("dev"));
app.use(cors({origin:true,
    credentials: true
}));



//routes
app.use("/user", userRoutes)


//port
const port= process.env.PORT || 8080;




//listener
const server = app.listen (port, ()=>
    console.log(`Server is running on port ${port}`)
);