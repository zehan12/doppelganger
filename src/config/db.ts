import mongoose from "mongoose";
import { config } from "./config";

/**
 * Connect To Database
 */
const connectDB = async () => {
  let DB =
    config.mongoose.url && config.mongoose.url.replace("<password>", config.mongoose.password);
  const options = {
    useNewUrlParser: true,
    autoIndex: true,
    // useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
  };
  try {
    const connection = await mongoose.connect(DB, options);
    console.log(`MongoDB connected to ${connection.connection.host} DB ✅`);
  } catch (e: any) {
    console.log(`Error connecting to mongoose due to ${e.message} ❌`);
  }
};

export default connectDB;
