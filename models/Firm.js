const mongoose=require("mongoose");

const firmRegester=new mongoose.Schema({
    firmName:{
        type:String,
        required:true,
        unique:true
    },
    area:{
        type:String,
        required:true
    },
    category:{
        type:[
            {
                type:String,
                enum:['veg','nonveg']
            
            }
        ]
    },
    region:{
        type:[
            {
                type:String,
                enum:['South-Indian','North-Indian','chinese','Bakery']
            }
        ]
    },
    offer:{
        type:String
    },
    Image:{
        type:String
    },
    vendor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Vendor'
        }
    ],
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ]
})

const Firm=mongoose.model('Firm',firmRegester);

module.exports=Firm;