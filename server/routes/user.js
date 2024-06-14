const express = require('express')

//controllers
const {signupUser, loginUser, forgotPassword, verifyOTP, resetpassword, applied_jobs, list_applied_jobs,delete_applied_jobs} = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)

 
//signup route
router.post('/signup', signupUser)

//forgot password
router.post('/forgotpassword', forgotPassword)

//verifyOTP route
router.post('/verifyotp', verifyOTP)

//resetpassword
router.post('/resetpassword', resetpassword)

//myjobs
router.post('/myjobs', applied_jobs)

//myjobs fetch
router.get('/appliedjobs', list_applied_jobs)

//deletjobs
router.delete('/deletejobs', delete_applied_jobs)

module.exports = router
