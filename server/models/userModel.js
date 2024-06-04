const mongoose = require('mongoose');
const bcryptjs = require ('bcryptjs');
const validator = require('validator');


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


const validateURL = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
}; 




const profileSchema = new Schema ({
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
    current_company: {
        type: String,
    },
    personal_information: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String,
        validate: {
            validator: validateURL,
            message: props => `${props.value} is not a Valid URL!`
        }
    },
    twitter_url: {
        type: String,
        validate: {
            validator: validateURL,
            message: props => `${props.value} is not a Valid URL!`
        }
    },
    github_url: {
        type: String,
        validate: {
            validator: validateURL,
            message: props => `${props.value} is not a Valid URL!`
        }
    },
    portfolio_url: {
        type: String,
        validate: {
            validator: validateURL,
            message: props => `${props.value} is not a Valid URL!`
        }
    },
    other_links: {
        type: String,
        validate: {
            validator: validateURL,
            message: props => `${props.value} is not a Valid URL!`
        }
    }
}
)

//static filling of Profile Info
profileSchema.statics.register = async function (firstname, lastname, phone_number, current_company, 
    personal_information, linkedin_url, twitter_url, github_url, portfolio_url, other_links)
    {
        if (!firstname || !lastname || !phone_number || !personal_information) {
             throw Error('Name, Phone Number and Personal Summary must be filled')}
            
            const detail = await this.create({firstname, lastname, phone_number, current_company, 
                personal_information, linkedin_url, twitter_url, github_url, portfolio_url, other_links})
    
            return detail
    
    }



module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('Detail', profileSchema)
