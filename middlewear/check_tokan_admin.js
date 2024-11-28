var jwt = require('jsonwebtoken');

exports.check_tokan=async (req,res,next)=>{
    jwt.verify(req.headers.authorization,'admin',next)
}