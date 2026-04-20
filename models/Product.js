const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:[{
            type:String,
            enum:["veg","non-veg"]
        }],
        required:true
    },
    image:{
        type:String,
    },
    bestSeller:{
        type:Boolean,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Firm"
    }]
})

const Product= mongoose.model("Product",ProductSchema);

module.exports=Product;