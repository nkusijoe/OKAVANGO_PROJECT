const cloudinary = require('cloudinary').v2
const dataUriParser = require('datauri/parser')
const path = require('path')
require('dotenv').config()

const parser = new dataUriParser()

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
})

async function uploadmedia(file){
  const extname = path.extname(file.originalname).toString()
  const base64 = parser.format(extname,file.buffer)
  const fileUpload = await cloudinary.uploader.upload(base64.content)
  return fileUpload
}

module.exports = {uploadmedia}