const mongoose = require('mongoose')

const farmerModel = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    adharNumber : {
        type : String,
    },
    phoneNumber : {
        type : String,
    },
    khasraNumber : {
        type : String,
    },
    address : {
        type : String,
    },
    landArea : {
        type : String,
    },
    password : {
        type : String,
    }
})

const Farmer = mongoose.model('Farmer', farmerModel)

module.exports = Farmer