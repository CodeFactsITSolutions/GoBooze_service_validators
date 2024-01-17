const authorizationMiddleware={};
const jwtHelper=require("../../src/helpers/jwt.helper");

authorizationMiddleware.validateUser=async (req, res, next)=>{
    try{
        let token=req.headers.token;
        let check= await jwtHelper.verifyToken(token);
        if(check){
            req.user=check;
            next();
        }
    }catch(e){
        console.log(e);
        res.send({
            status:"error", 
            message:"Invalid Token"
        })
    }



}