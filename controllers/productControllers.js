const multer=require("multer");
const Firm=require("../models/Firm")
const Product=require("../models/Product");

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

        const upload=multer({storage:storage});

const addProduct=async(req,res)=>{
    const {productName,price,category,bestSeller,description}=req.body;
    const image=req.file?req.file.filename:undefined;

    const firmId=req.params.firmId;
    const firm=await Firm.findById(firmId);
    try{
    if(!firm){
        res.status(404).json({error:"firm not found"});
    }
    const product=new Product({
        productName,price,category,bestSeller,description,image,firm:firm._id
    });
     const savedProduct=await product.save();

    firm.products.push(savedProduct);

    await firm.save();
    res.status(200).json("product added successfully")
    }
    catch(error){
        console.error(error);
        res.status(400).json({error:"internal error"})
    }
}

const getProductByFirm=async(req,res)=>{
    const firmId=req.params.firmId;
    const firm=await Firm.findById(firmId);
 
    try{
        if(!firm){
            return res.status(400).json({error:"firm id not founf which u have given"})
        }
        const products=await Product.find({firm:firmId})
        const restrauntName=firm.firmName
        res.status(200).json({restrauntName, products})
    }catch(error){

    }
}

const deleteProductById=async(req,res)=>{
    const productId=req.params.productId;
    const deleteProduct=await Product.findByIdAndDelete(productId);
    try{
    if(!deleteProduct){
        return res.status(404).json({error:"no product with that id to delete"})
    }
    }
    catch(error){
        res.status(500).json({error:"internal error"})
    }
}

module.exports={addProduct:[upload.single('image'),addProduct],getProductByFirm,deleteProductById};
    