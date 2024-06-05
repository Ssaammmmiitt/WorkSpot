const User = require('../models/userModel')
const jwt = require('jsonwebtoken')



const createToken = (_id) => {
    return jwt.sign({_id:_id}, process.env.SECRET, {expiresIn :'1d'})
}

//login user
const loginUser = async (req, res) => {
    const {email, password } = req.body

    try {
        const user= await User.login(email, password)


        const token = createToken(user._id)


        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}






///signup user
const signupUser = async (req, res) => {
    const { email, password, firstname, lastname, phone_number, 
        currentcompany, personal_summary, current_job_title,work_experience,job_location,linkedin_url, twitter_url, github_url, portfolio_url, other_links }= req.body

     
    try {
        const user= await User.signup(email, password, firstname, lastname, phone_number, currentcompany,
        personal_summary, current_job_title ,work_experience, job_location, linkedin_url, twitter_url, github_url, portfolio_url, other_links)


        const token = createToken(user._id)


        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports ={signupUser, loginUser}