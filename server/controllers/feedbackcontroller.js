const FeedBack = require('../models/feedbackModel')

//addfeeback

const userFeedback = async (req, res) => {
    const {firstname, lastname, company, email, phone_number, message} = req.body

    try {
        const feedback= await FeedBack.feedback(firstname, lastname, company, email, phone_number, message)
        res.status(200).json({firstname, lastname, company, email, phone_number, message})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {userFeedback}