import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/validateMe`)   
        console.log("MongoDB Connected! ");
    } catch (error) {
        console.log("MongoDB Connection Failed !", error);
        process.exit(1);
    }
}

export default connectDB;

