import mongoose from "mongoose";

// Global variable takay connection cache ho jaye
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn; // Agar connection pehle se hai, toh wahi wapis karo
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false, // Vercel ke liye zaruri
        };

        cached.promise = mongoose.connect(process.env.MONGO_URL, opts).then((mongoose) => {
            return mongoose;
        });
    }
    
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

export default connectDB;