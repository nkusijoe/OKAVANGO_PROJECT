const {Router} = require('express')
<<<<<<< HEAD
const { createUnit,getAllUnits,getUnitById,deleteUnit,updateUnit } = require('../controllers/units')
const { checkAuth } = require('../middleware/auth')
=======
const { createUnit } = require('../controllers/units')
const { checkAuth } = require('../middleware/auth')
const fileUpload = require('../utils/multer')
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957

const router = Router()

router.use(checkAuth)
<<<<<<< HEAD
router.post('/',createUnit)
router.get('/',getAllUnits)
router.get('/:id',getUnitById)
router.put('/:id',updateUnit)
router.delete('/:id',deleteUnit)
=======
router.post('/',fileUpload.single('video'),createUnit)
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957

module.exports = router