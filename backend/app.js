const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const usersignuprouter = require("./controller/UserSignupRouter")
const donorrouter=require("./controller/DonorRouter")
const patientrouter=require("./controller/PatientRouter")
const matchrouter=require("./controller/MatchRouter")
const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://amaldev123:amaldev1234@cluster0.dtrzikf.mongodb.net/lifepulseDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)   
 
app.use("/api/user",usersignuprouter)
app.use("/api/donor",donorrouter)
app.use("/api/patients",patientrouter)
app.use("/api/match",matchrouter)

app.listen(3001,()=>{
    console.log("server running")
})