const mongoose = require('mongoose')

const activityModel = mongoose.Schema({
    name : {
        type : String,
        // required : true,
    },
    startDate : {
        type : String,
        // required : true,
    },
    endDate : {
        type : String,
        // required : true,
    },
    proofOfActivity : {
        type : String,
        // required : true,
    },
    peopleInvolved : {
        type : String,
        // required : true,
    },
    wagesPaid : {
        type : String,
        // required : true,
    },
    lemonGrass : {
        type : String,
        // required : true,
    },
    quantity : {
        type : String,
        // required : true,
    },
    oil : {
        type : String,
    }
})

const Activity = mongoose.model('Activity', activityModel)

module.exports = Activity