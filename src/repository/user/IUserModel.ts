import mongoose, { Document, Model } from 'mongoose';
export default interface IUser extends Document{
    id:string;
    name:string;
    email:string;
    password:string;
    createdAt:Date;
    modifiedAt?:Date;
    isActive:boolean;
    avatar:string;
}