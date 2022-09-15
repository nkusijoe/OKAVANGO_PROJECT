const {Unauthorized} = require('http-errors')

const checkAuth = async(req,res,next)=>{
    try{
<<<<<<< HEAD
        if(!req.session.user) throw new Unauthorized('Please login')
=======
        if(!req.session || !req.session.user) throw new Unauthorized('Please login')
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
        next()
    }catch(err){
        next(err)
    }
}

<<<<<<< HEAD
const roleAuth = (...roles)=>{
 return async(req,res,next)=>{
    try{
        if(!req.session.user) throw new Unauthorized('Please login')
        if(!roles.includes(req.session.user.role)) throw new Unauthorized('Not authorized')
        next()
    }catch(err){
        next(err)
    }
}}

module.exports = {checkAuth,roleAuth}
=======
module.exports = {checkAuth}
>>>>>>> 62f7a1dc35c341f03e3a46d1e56668d3fdc92957
