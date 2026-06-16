const mongoose = require("mongoose")
const signupschema = mongoose.Schema(
    {
        hosname:{
            type:String,
            required:true
        },
        hosusername:{
            type:String,
            required:true
        },
        hoslocation:{
            type:String,
            required:true
        },
        hoscontact:{
            type:String,
            required:true
        },
        hosemail:{
            type:String,
            required:true
        },
        hospassword:{
            type:String,
            required:true
        }


    }
)

module.exports=mongoose.model("users",signupschema)