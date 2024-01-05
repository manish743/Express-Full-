import jwt from "jsonwebtoken"
import { secretKey } from "../config.js";

export let isAuthenticated = async(req,res,next)=>{
    let bearerToken = req.headers.authorization;
    // console.log(bearerToken)
    let token = bearerToken.split(" ")[1]

    try {
        let infoObj = jwt.verify(token,secretKey);
        let id = infoObj.id;
        req.id = id
        next()
      } catch (error) {
        res.json({
          success : false,
          message : error.message
        })
      }
}