const Vendor=require("../models/Vendor");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");

dotenv.config();

const secretKey=process.env.WhatIsYourName;

const verifyToken=async(req,res,next)=>{
     const token=req.headers.token;

     if(!token){
        res.status(500).json("Invalid token")
     }
     try{
        const decoded=jwt.verify(token,secretKey);
        const vendor=await Vendor.findById(decoded.vendorId);

        if(!vendor){
            return res.status(401).json({ error: "No token provided" });
        }
        req.vendorId=vendor._id
        next();

     }
     catch(error){
        console.log(error);
        res.status(500).json("Invalid token")
     }
}

module.exports=verifyToken;