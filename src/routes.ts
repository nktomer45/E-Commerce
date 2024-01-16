import * as express from 'express';
import userInfo from './controllers/userInfo';

const routes=express.Router();

routes.get('/',(req,res,next)=>{
    res.status(200).json({message:"health check"})
})

routes.get('/user',userInfo.getUserInfo);

routes.post('/user',userInfo.createUserInfo);

export default routes;




