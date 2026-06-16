const express=require("express");
const router=express.Router();
const PatientModel=require("../model/PatientModel")


router.post("/register",async(req,res)=>{
    let data=req.body
    let post=new PatientModel(data)
    let result=await post.save()
    res.json({
      status:"success"
    })
  })

  router.post("/view",async(req,res)=>{
    let data=req.body   
    let result=await PatientModel.find(data)
    res.json(result)
  })
  
  router.post("/delete",async(req,res)=>{
    let input=req.body
    let response=await PatientModel.deleteOne(input)
    res.json({status:"success"})
  })

  router.post("/search", async (req, res) => {
    const { userId, Fullname } = req.body;
    console.log("Search Request Body:", req.body); // Log the request body
    let data = await PatientModel.find({ userId, Fullname: { $regex: new RegExp(Fullname, "i") } });
    console.log("Search Result:", data); // Log the search result
    res.json(data);
});



module.exports=router;