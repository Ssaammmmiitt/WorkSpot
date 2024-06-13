const mongoose = require('mongoose')
const validator = require('validator')




const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    company : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})
 

//static feedback function
feedbackSchema.statics.feedback = async function (firstname, lastname, company, email, phone_number, message )
{
    if (!firstname || !lastname || !company || !email || !phone_number || !message)
        {
            throw Error('All fields must be filled')
        }
        
    if(!validator.isEmail(email))
        {
            throw Error('Email is not valid')
        }

    const feedback = await this.create({firstname, lastname, company, email, phone_number, message})

    return feedback
}

    


module.exports= mongoose.model('FeedBack', feedbackSchema)