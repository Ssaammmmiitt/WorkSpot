const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const validator = require('validator')




const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String, 
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    phone_number: {
        type: String, 
        required: true, 
        unique: true
    },
    currentcompany: {
        type: String
    },
    
    personal_summary: {
        type: String,
        required: true
    },
    current_job_title: {
        type: String,
    },
    work_experience: {
        type: String,
    },
    job_location: {
        type: String,
    },
    linkedin_url: {
        type: String
    },
    twitter_url: {
        type: String
    },
    github_url: {
        type: String
    },
    portfolio_url: {
        type: String
    },
    other_links: {
        type: String
    },
    resetPasswordOTP: {
        type: String
    },
    resetPasswordOTPExpires: {
        type: Date
    }
})
 

//staticsignup
userSchema.statics.signup = async function (email, password, firstname, lastname, phone_number, currentcompany, personal_summary, current_job_title ,work_experience, job_location,linkedin_url, twitter_url, github_url, portfolio_url, other_links)
{
    // validation
    if (!email || !password ||!firstname ||!lastname ||! phone_number ||! personal_summary)
        {
            throw Error ('Email, Password, Name, Phone_Number and Personal Summary must be filled')
        }

        
    if (!validator.isEmail(email)) 
        {
            throw Error('Email is not valid')
        }

    if (!validator.isStrongPassword(password))
        {
            throw Error('Password not strong Enough')
        }
    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email Already in Use')
    }

    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(password, salt)

    const user = await this.create({email, password: hash, firstname, lastname, phone_number,currentcompany,personal_summary, current_job_title ,work_experience, job_location,linkedin_url, twitter_url, github_url, portfolio_url, other_links })

    return user
}

//staticlogin
userSchema.statics.login = async function (email, password)
{
    if (!email || !password )
        {
            throw Error ('Email and Password must be filled')
        }

    const user = await this.findOne({email})

    if (!user) {
        throw Error ('Incorrect Email')
    }
    
    const match = await bcryptjs.compare(password, user.password)

    if (!match)
        {
            throw Error ('Incorrect Pasword')
        }

    return user
}





module.exports= mongoose.model('User', userSchema)