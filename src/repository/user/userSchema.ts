import { Schema } from 'mongoose';
import IUser from './IUserModel';

export default class userSchema extends Schema<IUser> {
    constructor(collection: any) {
        const user = Object.assign({
            id:{
                required:false,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            email: {
                required: true,
                type: String
            },
            password: {
                required: true,
                type: String
            },
            createdAt: {
                default: Date.now(),
                required:false,
                type: Date,
            },
            modifiedAt: {
                // default: ,
                required: false,
                type: Date,
            },
            isActive:{
                // default :true,
                required:true,
                type:Boolean
            },
            avatar:{
                required:false,
                type:String
            }
        })

        super(user, collection)
    }
}