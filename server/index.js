import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connectDB.js";
import ideaRouter from "./routes/ideaRoute.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();

// Database connect karo
connectDB();

// CORS FIX: Yahan humne Localhost aur Live Frontend dono ko allow kar diya hai 👇
app.use(cors({ 
    origin: ['http://localhost:5173', 'https://projectt-1-sopo.vercel.app'], 
    credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/idea", ideaRouter);
app.use("/api/v1/user", userRouter);

// Error Middleware
app.use(errorMiddleware);

// Test Route
app.get('/', (req, res) => {
    res.send("Bhai ka server ab asal mein zinda hai! 🚀");
});

// VERCEL FIX: app.listen hata kar sirf export default karna hai 👇
export default app;