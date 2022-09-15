const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        unique:true,
        required:true
    },
    field:{
        type:String,
        enum:['stem','arts','humanities','social sciences','health sciences','skills'],
        required:true
    }
})

module.exports = mongoose.model('course',courseSchema)