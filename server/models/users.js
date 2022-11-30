const mongoose = require('mongoose')

const {neasSchema} = require('./neas')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: String,
    email: String,
    picture: String,
    affiliatedNumber: {
        type: String,
        required: true,
        unique: true
    },
    affiliationDate: Date,
    occupation: String,
    birthdate: Date,
    neasDiscovered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'neas'
    }]
    
})

const User = mongoose.model('users', userSchema)

module.exports = User