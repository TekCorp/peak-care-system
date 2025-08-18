import express from "express";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const isImage = file.fieldname === 'image';
    const destinationPath = isImage ? './uploads/' : './uploads/Quote/';
    cb(null, destinationPath);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const imageFiletypes = /jpg|jpeg|png|webp/;
  const filetypes = file.fieldname === 'image' ? imageFiletypes : imageFiletypes;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images Only');
  }
}

const imageLimits = {
  fileSize: 20 * 1024 * 1024, // 10 MB
  files: 5, // Max 5 files
};

const upload = {
  cv: multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
  limits: imageLimits,
}),
image: multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
      },
}),

}

const storageBlog = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileTypeBlog(file, cb) {
  const filetypes = /jpg|jpeg|png|webp/;
  console.log("file info ==>",file);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    console.log("picture verified")
    return cb(null, true);
  } else {
    console.log("not  recieved");
    cb("Images Only");
  }
}

const uploadBlog = multer({
  storage:storage,
  fileFilter: function (req, file, cb) {
    const data = req.body;
  console.log("req.body",data);
    checkFileTypeBlog(file, cb);
  },
})


router.post("/", uploadBlog.single("image"), (req, res) => {
  const data = req.body;
  
  console.log("file recieved",req.file.path);
  res.send(`/${req.file.path}`);
})

// router.post("/", upload.image.single("image"), (req, res) => {
  
//   res.send(`/${req.file.path}`);
// })

router.post("/assessment", upload.cv.array("images", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const fileNames = req.files.map(file => file.path);
  res.json({ fileNames });
});



export default router
