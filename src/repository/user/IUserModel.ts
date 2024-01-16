
export default interface IUser{
    id:string;
    name:string;
    email:string;
    password:string;
    confirm_password:string;
    address?:string;
    createdAt:Date;
    modifiedAt:Date;
    isActive:boolean;
}