const express = require('express')
const router = express.Router()
//controller functions
const {signupUser, loginUser, filldetails} = require('../controllers/userController')




//login route
router.post('/login', loginUser)


//signup route
router.post('/signup', signupUser)

//fillup route
router.post('/fillup', filldetails)



module.exports = router
