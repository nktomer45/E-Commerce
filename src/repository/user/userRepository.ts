import IUser from "./IUserModel";
import UserModel from "./model";
import mongoose, { Document } from "mongoose";
import { currentDate } from "../../libs/Helper";

export default class UserRepository extends Document<IUser> {
  public static generateObjectId() {
    return String(new mongoose.Types.ObjectId());
  }

  public async create(data: IUser) {
    try {
      const newModel = new UserModel({
        ...data,
        createdAt: currentDate,
      });

      await newModel.save();
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Rethrow the error to be handled by the calling code
    }
  }
}
