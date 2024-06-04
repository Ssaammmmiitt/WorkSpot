const { token } = require('morgan');
const  {User, Detail} = require('../models/userModel')
const jwt = require('jsonwebtoken');
const path = require("path");
//id is part of the payload
const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
}



//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)

        //createToken
         const Token = createToken(user._id)


        res.status(200).json({email, Token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        //createToken
         const Token = createToken(user._id)

        res.status(200).json({email, Token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

//fillingdetail
const filldetails = async (req, res) => {
    const {firstname, lastname, phone_number, current_company, personal_information, 
        linkedin_url, twitter_url, github_url, portfolio_url, other_links} = req.body

    try {
        const detail = await Detail.fillup(firstname, lastname, phone_number, current_company, 
            personal_information, linkedin_url, twitter_url, github_url, portfolio_url, other_links)


        res.status(200).json({firstname, lastname, phone_number, current_company, 
            personal_information, linkedin_url, twitter_url, github_url, portfolio_url, other_links})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}


module.exports = {loginUser, signupUser, filldetails}