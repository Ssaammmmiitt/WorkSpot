const express = require('express')

//controollers
const {userFeedback} = require('../controllers/feedbackcontroller')

const router = express.Router()

//feedback route
router.post('/feedback', userFeedback)

module.exports= router