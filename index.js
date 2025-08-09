const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const vendorRoutes=require("./routes/vendorRoutes")
const bodyParser=require("body-parser");
const firmRoutes=require("./routes/firmRoutes");
const productRoutes=require("./routes/productRoutes");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("database connected successfully"))
    .catch((error)=>console.log(error));

    app.use(express.json());
    app.use("/vendor",vendorRoutes);
    app.use("/firm",firmRoutes);
    app.use("/product",productRoutes);

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`port is running at ${port}`);
})


app.use('/',(req,res)=>{
    res.send("<h1>we landed in the home page</h1>")
})