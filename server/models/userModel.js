const mongoose = require('mongoose');
const bcryptjs = require ('bcryptjs');
const validator = require('validator');
const multer = require('multer');

const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: {
        type:String,
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
        required:true
    },
    current_company: {
        type: String,
        required: true
    },
    personal_summary: {
        type: String,
        required: true
    },   
})

//static signup method
userSchema.statics.signup = async function (email, password)
{
    //validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error ('Email is not Valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not Strong Enough')
    }

    const exists = await this.findOne({email})

    if (exists) {
        throw Error('Email Already in Use')
    }

    const salt = await bcryptjs.genSalt(10)
    const hash = await bcryptjs.hash(password, salt)


    const user= await this.create({email, password: hash})
    return user

}


//static login method
userSchema.statics.login = async function (email, password)
{
    if (!email || !password) {
        throw Error('All fields must be filled')}

        const user = await this.findOne({email})

        if (!user) {
            throw Error('Incorrect Email')
        }
        const match = await bcryptjs.compare(password, user.password)

        if (!match ) {
            throw Error('Incorrect Pasword')
        }
        return user

}



module.exports = mongoose.model('User', userSchema)
