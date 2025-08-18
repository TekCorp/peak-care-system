import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
import multer from 'multer';
import path from "path";
import { S3 } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

dotenv.config();



const s3 = new S3({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },

    region: process.env.AWS_REGION,
});


const checkFileType = (file, cb) => {
    const filetypes = /jpg|jpeg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb("Images Only");
    }
};

const addNewFileToAWS = asyncHandler(async (req, res, next) => {
        
    const upload = multer({
        limits: { fileSize: 2000000 },
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        },
        storage: multerS3({
            s3: s3,
            bucket: process.env.AWS_BUCKET_NAME,
            acl: "public-read",
            contentType: multerS3.AUTO_CONTENT_TYPE,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                
                cb(null, Date.now().toString() + "-" + file.originalname);
            },
        }),
    }).single("image");

    upload(req, res, function (err) {
        
        if (err) {
            return res.status(400).json({ message: err.message, status: 400 });
        } else if (!req.file) {
            return res.status(400).json({ message: "No file uploaded", status: 400 });
        }
        
        res.status(201).send(`${req.file.location}`); 
    });
});


const getAllBackupFiles = asyncHandler(async (req, res) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME
    };

    try {
        const data = await s3.listObjectsV2(params);
        const files = data.Contents.map(obj => {
            return {
                name: obj.Key,
                url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${obj.Key}`
            };
        });
        res.status(200).json({    
            message: "All backup files retrived successfully!",
            status: 200,
            data: files
        });
    } catch (error) { 
        res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
});

export {
    getAllBackupFiles,
    addNewFileToAWS
};