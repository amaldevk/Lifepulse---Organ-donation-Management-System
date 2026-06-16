const mongoose=require("mongoose")
const patientschema=mongoose.Schema(

    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        Fullname: {
            type: String,
            required: true
        },
        Dateofbirth: {
            type: String,
            required: true
        },
        Gender: {
            type: String,
            required: true
        },
        bloodType: {
            type: String,
            required: true
        },
        Phone: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        Emergencycontact: {
            type: String,
            required: true
        },
        Emergencyrelationship: {
            type: String,
            required: true
        },
        Medicalcondition:{
            type:String,
            required:true
        },
        CurrentMedications:{
            type:String,
            required:true
        },
        Allergies:{
            type:String,
            required:true 
        },
        PreviousHistory:{
            type:String,
            required:true 
        },
        RequiredOrgan:{
            type:String,
            required:true
        }

    }
)

module.exports=mongoose.model("patient",patientschema )