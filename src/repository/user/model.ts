import { SchemaType, model } from 'mongoose';
import IUser from "./IUserModel";
import UserSchema from "./userSchema";
import { schemaTranform } from '../../libs/utilities'



const userSchema = new UserSchema({
    collection: "userInfo",
    toJSON: {
        transfrom: (doc: any, ret: any) => schemaTranform(doc, ret),
        virtuals: true
    },
    toObject: {
        transfrom: (doc: any, ret: any) => schemaTranform(doc, ret),
        virtuals: true
    },
})

userSchema.pre('save', (next: any) => {
    next();
})


userSchema.index({
    id: 1,
    email: 1,
    isActive: 1,
})

const userModelDetail= {
    collectionName: 'userInfo',
    modelName: "userInfoSchema",
    schema: userSchema,

}

export default userModelDetail