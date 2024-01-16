import { Request,NextFunction,Response } from "express";
import redisClient from "../redisClient/redisClient";
import axios from "axios";

class User{
    public  getUserInfo = async (req:Request,res:Response,next:NextFunction)=>{
        try{

            let  { key } =req.body
            let cahedPost = await redisClient.get(key)
            if(cahedPost){
                // Retrieve cached user information
                return  res.status(200).json(JSON.parse(cahedPost));
            }
            key = key.replace('post', '');
            const  response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${key}`)
            // Store user information in Redis (key, data, duration)
            await redisClient.set(key,JSON.stringify(response.data),10);
            return res.status(200).json({messge:response.data})
        }
        catch(err){
            return res.status(404).json({message:err})
        }
    }

    public  createUserInfo = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { key, userInfo } = req.body;
      
          // Store user information in Redis (key, data, duration)
          await redisClient.set(key, JSON.stringify(userInfo),  100);
      
          // Retrieve cached user information
          let cachedUserInfo = await redisClient.get(key);
      
          if (cachedUserInfo !== null) {
            cachedUserInfo = JSON.parse(cachedUserInfo);
            return res.status(200).json({ message: cachedUserInfo }); // Send the cached user info
          }
      
          // If user info was not found in cache
          return res.status(200).json({ message: 'User Info is accepted' });
        } catch (err) {
          console.error(err); // Log the error for debugging
          return res.status(500).json({ message: 'Internal Server Error' }); // Handle the error gracefully
        }
      };
      
}

export default new User()