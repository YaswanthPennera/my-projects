const productController=require("../controllers/productControllers");
const express=require("express");

const route=express.Router();

route.post("/add-product/:firmId",productController.addProduct);
route.get("/:firmId/products",productController.getProductByFirm);
route.delete("/:productId",productController.deleteProductById);

module.exports=route;