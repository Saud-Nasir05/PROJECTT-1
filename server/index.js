    import dotenv from "dotenv"
    import express from "express"
    import connectDB from "./db/connectDB.js";
    dotenv.config()
    import ideaRouter from "./routes/ideaRoute.js"
    import userRouter from "./routes/userRoute.js"
    import cookieParser from "cookie-parser";
    const app=express();
    import cors from "cors";
    connectDB()
    app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
    app.use(express.json())
    app.use(cookieParser());
    app.use("/api/v1/idea",ideaRouter)
    app.use("/api/v1/user",userRouter)
    import { errorMiddleware } from "./middlewares/errorMiddleware.js";
    app.use(errorMiddleware);
    // index.js ki aakhri lines ko is se badal de:

// index.js ki aakhri lines:
app.get('/', (req, res) => {
    res.send("Bhai ka server ab asal mein zinda hai! 🚀");
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`🚀 App is running on port ${process.env.PORT || 8000}`);
});