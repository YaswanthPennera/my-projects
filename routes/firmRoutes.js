const express=require("express");
const firmController=require("../controllers/firmControllers");
const verifyToken=require("../middlewares/verifyToken")
const {upload}=require("../controllers/firmControllers");

const router=express.Router();

router.post('/add-firm/',verifyToken,upload.single('image'),firmController.addFirm);
router.delete('/:firmId',firmController.deleteFirmById);

module.exports=router;