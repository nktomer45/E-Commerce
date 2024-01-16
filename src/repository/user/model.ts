import mongoose, { Model } from 'mongoose';
import IUser from './IUserModel';
import UserSchema from './userSchema';
import { schemaTranform } from '../../libs/utilities';

const userSchema = new UserSchema({
    collection: 'userInfo',
    toJSON: {
        transform: (doc: any, ret: any) => schemaTranform(doc, ret),
        virtuals: true
    },
    toObject: {
        transform: (doc: any, ret: any) => schemaTranform(doc, ret),
        virtuals: true
    },
});

userSchema.pre('save', (next: any) => {
    next();
});

userSchema.index({
    id: 1,
    email: 1,
    isActive: 1,
});

// Create the Mongoose model using mongoose.model
const UserModel: Model<IUser> = mongoose.model<IUser>('userInfo', userSchema);

// Export the Mongoose model
export default UserModel;
