import IUser from "./IUserModel";
import model from "./model";
import { Document, } from "mongoose";
import * as mongoose from 'mongoose';

export default class UserRepository extends Document<IUser>{
    public static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
      }

    // public async create(data:IUser){
    //     const newModel=new model({
    //         ...data,
    //         id:UserRepository.generateObjectId()
    //     })

    // }

}