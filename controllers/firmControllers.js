const Firm=require("../models/Firm");
const Vendor=require("../models/Vendor");
const multer=require("multer");
const path=require("path");
const fs=require("fs");

// Create uploads directory if it doesn't exist
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // Store the image in the "uploads" folder
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            // Set the file name to the original file name with timestamp to avoid conflicts
            cb(null, Date.now() + path.extname(file.originalname));
        }
        });

// Create the multer instance and configure it with the storage
const upload = multer({ storage: storage });

const addFirm=async(req,res)=>{
    try{
    const {firmName,area,category,region,offer}=req.body;
    const image=req.file?req.file.filename:undefined;

    const vendor=await Vendor.findById(req.vendorId);
    if(!vendor){
        res.status(400).json({error:"vendor not found"});
    }
     if(vendor.firm.length>=1){
        return res.status(400).json({error:"vendor can only have one firm"});
    }

    const firm=new Firm({
        firmName,area,category,region,offer,Image:image,vendor:vendor._id
    });
    
    const savedFirm=await firm.save();

    vendor.firm.push(savedFirm);

    await vendor.save();

    return res.status(200).json({message:"firm added successfully",firmId: savedFirm._id});
    }catch(error){
        console.log({error:"internal service error"});
    }
    
}

const deleteFirmById=async(req,res)=>{
    const firmId=req.params.firmId;
    const deleteFirm=await Firm.findByIdAndDelete(firmId);
    try{
    if(!deleteProduct){
        return res.status(404).json({error:"no Firm with that id to delete"})
    }
    }
    catch(error){
        res.status(500).json({error:"internal error"})
    }
}

module.exports={addFirm,deleteFirmById,upload}