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
        required: false
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        //unique: true
    },
    currentCompany: {
        type: String
    },
    bio: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
    },
    workExperience: {
        type: String,
    },
    jobTypes: {
        type: String,
    },
    jobLocation: {
        type: String,
    },
    remoteWorking: {
        type: String
    },
    linkedinUrl: {
        type: String
    },
    twitterUrl: {
        type: String
    },
    githubUrl: {
        type: String
    },
    portfolioUrl: {
        type: String
    },
    otherWebsite: {
        type: String
    },
    resetPasswordOTP: {
        type: String,
    },
    resetPasswordOTPExpires: {
        type: Date
    },
    jobsApplied: {
        type: [Number]
    },
});
//staticsignup
userSchema.statics.signup = async function (firstname,
    lastname,
    email,
    password,
    phone,
    currentCompany,
    bio,
    jobTitle,
    workExperience,
    jobTypes,
    jobLocation,
    remoteWorking,
    linkedinUrl,
    twitterUrl,
    githubUrl,
    portfolioUrl,
    otherWebsite) {
    // validation
    console.log(firstname, lastname, email, phone, currentCompany, bio, jobTitle, workExperience, jobTypes, jobLocation, remoteWorking, linkedinUrl, twitterUrl, githubUrl, portfolioUrl, otherWebsite);
    if (!email || !firstname || !lastname || !phone || !bio) {
        throw Error('Email,  Name, Phone_Number and Personal Summary must be filled')
    }


    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email Already in Use')
    }
    const user = await this.create({
        firstname,
        lastname,
        email,
        phone,
        currentCompany,
        bio,
        jobTitle,
        workExperience,
        jobTypes,
        jobLocation,
        remoteWorking,
        linkedinUrl,
        twitterUrl,
        githubUrl,
        portfolioUrl,
        otherWebsite
    })

    return user
}

//staticlogin
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('Email and Password must be filled')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcryptjs.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Pasword')
    }

    return user
}





module.exports = mongoose.model('User', userSchema)