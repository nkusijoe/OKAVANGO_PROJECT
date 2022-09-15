const {Router} = require('express')
const cloudinary = require('cloudinary').v2
const { createUnit } = require('../controllers/units')
const { checkAuth } = require('../middleware/auth')
const fileUpload = require('../utils/multer')

const router = Router()

router.use(checkAuth)
router.post('/',fileUpload.single('video'), async (req,res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        res.json(result)
    }catch(e){
        console.log(e)
    }
})

module.exports = router