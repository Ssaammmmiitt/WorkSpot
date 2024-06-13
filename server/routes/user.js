const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const upload = multer()

//controllers
const { signupUser, loginUser, forgotPassword, verifyOTP, resetpassword, applied_jobs } = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)


//signup route
router.post('/signup', upload.none(), signupUser)

//forgot password
router.post('/forgotpassword', forgotPassword)

//verifyOTP route
router.post('/verifyotp', verifyOTP)

//resetpassword
router.post('/resetpassword', resetpassword)

//myjobs
router.post('/myjobs', applied_jobs)


module.exports = router
