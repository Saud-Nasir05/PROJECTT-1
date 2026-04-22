import mongoose ,{mongo} from "mongoose";
export const connectDb=async()=>{
try {
    const MONGO_URL=process.env.MONGO_URL
    const instance=await mongoose.connect(MONGO_URL)
    console.log(`connected : ${instance.connection.host}`)
} catch (error) {
    console.log(`failed due to : ${error}`)
}
}