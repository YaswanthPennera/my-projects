const Vendor=require("../models/Vendor")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const dotenv=require("dotenv");

dotenv.config()

const secretKey=process.env.WhatIsYourName;

const vendorRegistration=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const vendorEmail=await Vendor.findOne({email})
        if(vendorEmail){
            return res.status(400).json("email is already there");
        }
        const hashPassword=await bcrypt.hash(password,10);
        const newVendor=new Vendor({
            username,
            email,
            password:hashPassword
        })
        await newVendor.save()
        res.status(200).json("user registered sucessfully")
        console.log("registered")


    }catch(error){
        console.error(error);
        res.status(500).json({error:"internal error"})
    }
}

const vendorLogin =async(req,res)=>{
    const {email,password}=req.body;
    try{
        const vendor=await Vendor.findOne({email});
        if(!vendor || !(await bcrypt.compare(password,vendor.password))){
            res.status(400).json({error:"Invalid username or password"});
        }

        const token=jwt.sign({vendorId: vendor._id},secretKey,{expiresIn:"1h"});

        res.status(200).json({sucess: "sucessfully loged in" ,token});
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Invalid email"})
    }

}
const getAllVendors =async(req,res)=>{
    try{
    const vendors=await Vendor.find().populate('firm');
    res.json({vendors});
    }
    catch(error){
        res.status(500).json({error:"internal error"});
        console.log(error)
    }
}

const getVendorById=async(req,res)=>{
    const vendorId=req.params.id;
    const vendor=await Vendor.findById(vendorId).populate('firm');
    try {
        if(!vendor){
            res.status(400).json({error:"vendor not found"});
        }
        else{
            res.json({vendor})
        }
    } catch (error) {
        res.status(500).json({error:"internal error"});
    }

}


module.exports={vendorRegistration,vendorLogin,getAllVendors,getVendorById};