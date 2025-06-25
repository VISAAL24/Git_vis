import mongoose from "mongoose"

export const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://VisaalM:VISAAL24@cluster0.01ag4lh.mongodb.net/sample_mflix')
        console.log("MongoDB Connected")
    }
    catch (error){
        console.log(error)
}
}