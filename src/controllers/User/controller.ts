import { Request,Response,NextFunction } from "express";

import UserRepository from "../../repository/user/userRepository";

class UserController {
  private static instance: UserController;
  private userRepository:UserRepository 
  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  
  private constructor(){
    this.userRepository = new UserRepository();

  }
    
  public create(req:Request,res:Response,next:NextFunction){
     try{
         const data=req.body;
            
         console.log(req)
         res.status(200).json({message:" user now created",data})
     }catch(err){
        console.info("User Controller checkPlanNameDuplication ERROR', err")
     }
  }
}

export default UserController.getInstance()