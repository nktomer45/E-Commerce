import {Router} from "express";
import user from './controller'

const routes= Router();

routes.post("/create",user.create)


export default routes;