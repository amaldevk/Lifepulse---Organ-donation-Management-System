const express = require("express");
const router = express.Router();

const DonorModel = require("../model/DonorModel");

router.post("/register",async(req,res)=>{
  let data=req.body
  let post=new DonorModel(data)
  let result=await post.save()
  res.json({
    status:"success"
  })
})

router.post("/view",async(req,res)=>{
  let data=req.body   
  let result=await DonorModel.find(data)
  res.json(result)
}) 

router.post("/delete",async(req,res)=>{
  let input=req.body
  let response=await DonorModel.deleteOne(input)
  res.json({status:"success"})
})

router.post("/search", async (req, res) => {
  const { userId, fullname } = req.body;
  console.log("Search Request Body:", req.body); // Log the request body
  let data = await DonorModel.find({ userId, fullname: { $regex: new RegExp(fullname, "i") } });
  console.log("Search Result:", data); // Log the search result
  res.json(data);
});




module.exports = router;
