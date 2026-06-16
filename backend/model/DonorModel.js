const mongoose = require("mongoose");

const donorschema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
    },
    fullname: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    specificOrgansToDonate: {
        type: [String],
        default: [],
        required: true
    },
    bloodtype: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    emergencycontact: {
        type: String,
        required: true
    },
    emergencyrelationship: {
        type: String,
        required: true
    },
    organspecifichealthrecord: {
        type: String,
        required: true
    },
    medicalhistory: {
        type: String,
        required: true
    },
    infeciousdiseasestatus: {
        type: String,
        required: true
    },
    lifestylefactors: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("donors", donorschema);
