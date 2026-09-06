import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
