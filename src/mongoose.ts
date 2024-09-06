/*
 * @Author: Mr.Car
 * @Date: 2024-09-05 15:51:36
 */
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!,{authSource: 'admin'});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: Error | any) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB