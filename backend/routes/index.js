const express = require('express');
const router=express.Router();


const UploadController=require('../controller/Upload_controller');
const UserController= require('../controller/user_controller');

router.get('/',UploadController.Upload);
router.post("/createpdf",UploadController.createPdf);
// http://localhost:2000/createpdf


router.post("/register",UserController.register);
router.post("/login",UserController.login);



module.exports=router;