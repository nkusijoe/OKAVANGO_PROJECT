const mongoose = require('mongoose')
const {DB_NAME,DB_USERNAME,DB_PASSWORD} = process.env

<<<<<<< HEAD
const connectToMongo = () =>{ mongoose.connect(`mongodb://localhost:27017/okavango`).then((connection)=>{
=======
const connectToMongo = () =>{ mongoose.connect(`mongodb+srv://okavango:90909@okavango.rf0rxso.mongodb.net/?retryWrites=true&w=majority`).then((connection)=>{
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
    console.log('Connected to mongo')
}).catch((err)=>{
    console.error(err)
})}

module.exports = { connectToMongo }