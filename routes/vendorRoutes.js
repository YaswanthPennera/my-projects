const vendorController=require("../controllers/vendorControllers");
const express=require("express")

const route=express.Router();

route.post("/register",vendorController.vendorRegistration);
route.post("/login",vendorController.vendorLogin);
route.get("/all-vendors",vendorController.getAllVendors);
route.get("/get-by-id/:id",vendorController.getVendorById);

module.exports=route;