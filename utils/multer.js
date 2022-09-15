const multer = require('multer');

const fileTypes = {
  'video/mp4': 'mp4',
  'video/avi': 'avi',
  'video/mov': 'mov',
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const isValid = fileTypes[file.mimetype];
    if(!isValid) cb(new Error('This is not a valid video format'))
    cb(null,true)
  },
});

module.exports = fileUpload;