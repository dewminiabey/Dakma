const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = function(req, res, next){
    //Get token from header
    const token = req.header('x-auth-token'); //key to find the token 
    console.log(token);

    //check token
    if(!token){
        return res.status(401).json({msg: 'No Token, Authorization Denied !'})
    }

    //verify token
    try{
        
        const decoded = jwt.verify(token, process.env.JWTSECRET);
        req.student = decoded.student;
        next();
    }catch(err){
        res.status(401).json({msg: 'Token is Invalid !'});
    }
}