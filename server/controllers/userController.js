const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { sendEmail, sendOtp } = require('../utilities/sendEmailutility')
const {v4: uuidv4} = require('uuid')
const bcryptjs = require('bcryptjs')



const createToken = (_id) => {
    return jwt.sign({_id:_id}, process.env.SECRET, {expiresIn :'3h'})
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


//forgot password
const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).send("User not found");
      }
  
      const otp = uuidv4().slice(0, 5); // Generate a simple 6-character OTP
      const salt = await bcryptjs.genSalt(10)
      const hash = await bcryptjs.hash(otp, salt)
      user.resetPasswordOTP = hash
      user.resetPasswordOTPExpires = Date.now() + 300000; // OTP expires in 5 minutes

      
      await user.save();
  
      const emailText = sendOtp(user.fullName, otp); // Create the email content
      const subject = "Verification code";
  
      await sendEmail(user.email, subject, emailText); // Send the email
  
      return res.status(200).json({ message: "OTP sent to email" });
    } catch (error) {
      console.error("Error in forgotPassword:", error);
      return res.status(500).json({ error: errorHandler(error) });
    }
}

module.exports ={signupUser, loginUser, forgotPassword}