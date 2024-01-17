
const dotenv=require("dotenv");
const authorizationMiddleware=require("../utility-service/src/middlewares/authorization.middleware")
dotenv.config();

module.exports={
    authorizationMiddleware
};


