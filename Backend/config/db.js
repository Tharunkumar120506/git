 import mongoose from 'mongoose'

 export const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://THARUNKUMAR:tharun2006@cluster0.wdfiwfb.mongodb.net/sample_mflix')
        console.log('MongoDB connected')
    }
    
    catch (error)
    {
        console.log(error);
    }
}