const express = require('express')
const router = express.Router()
const path = require("path")
const multer = require("multer")

const {addImage} = require("../Controllers/upload")
const storage = multer.diskStorage({
    destination : function (req , file,cb){
        cb(null,path.join(__dirname,"../images"))
    },
    filename : function (req,file ,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage : storage})

router.post("/", upload.single("image"),(req,res) => {
    res.status(200).json({message : 'uploaded succesfully'})
})

exports.module = router