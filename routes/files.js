const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multerUpload = multer({
  storage: storage,
});

router.post('/upload', multerUpload.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ status: 'files recieved' });
});

module.exports = router;
