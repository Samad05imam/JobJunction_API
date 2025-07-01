import mongoose from "mongoose";
const connectBb = async ()=>{
    try {
        mongoose.set('strictPopulate', false);
        await mongoose.connect("mongodb://127.0.0.1:27017/JobPortal");
        console.log("Mongoose connected successfully");
    } catch (error) {
        console.log(error);   
    }
}

export default connectBb;