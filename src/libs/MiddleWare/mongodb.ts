import mongoose from "mongoose";

interface IDatabaseConfig {
  mongoUrl: string;
}

export default class Database {
  public static open = async ({ mongoUrl }: IDatabaseConfig): Promise<void> => {
    try {
      const options = {
        serverSelectionTimeoutMS: 5000,
      };
      await mongoose.connect(mongoUrl, options);

      console.log("|| Connected  with MongoDB ||");
    } catch (err:any) {
      console.error(`Error connecting to database: ${mongoUrl}`);
      console.error(err.message);
      throw new Error(err.message);
    }
  };
}
