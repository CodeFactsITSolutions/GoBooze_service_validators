const jwt=require("jsonwebtoken");
const secretKey=process.env.JWT_SECRETKEY;

jwtHelper={};

jwtHelper.generateToken=(userDetails)=>{
    return jwt.sign(userDetails,secretKey);
}

jwtHelper.verifyToken=(token)=>{
    return jwt.verify(token, secretKey);
}


module.exports=jwtHelper;