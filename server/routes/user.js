const express = require('express')

//controllers
const {signupUser, loginUser, forgotPassword} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)

 
//signup route
router.post('/signup', signupUser)

//forgot password
router.post('/forgotpassword', forgotPassword)



module.exports = router
