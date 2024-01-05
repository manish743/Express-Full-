import { Register } from "../Schema/model.js";

export let authorized = (roles) => {
    return async (req, res, next) => {
      try {
        let id = req.id;
  
        let result = await Register.findById(id);
  
        let tokenRole = result.role;
  
        if (roles.includes(tokenRole)) {
          next();
        } else {
          res.status(403).json({
            success : false,
            message : "User not authorized"
          })
        }
      } catch (error) {
        res.status(403).json({
          success: false,
          message: error.message,
        });
      }
    };
  };