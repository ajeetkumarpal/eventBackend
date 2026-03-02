import express from "express";
import cors from "cors";
import { PORT } from "./config/serverConfig.js";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import paymentRouter from "./routes/paymentRoutes.js";
import eventRouter from "./routes/eventRouter.js";

const app=express();

app.use(cors({
  origin: function(origin, callback) {
    // Production aur development dono allow
    const allowedOrigins = [
      'https://event-frontend-black.vercel.app',
    ];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Origin blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(cookieParser());  
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use("/user",userRouter);
app.use("/payment",paymentRouter);
app.use("/event",eventRouter);
app.get("/",(req,res)=>{
    res.json("your route are incorrect");
})


app.listen(PORT,async()=>{
    await connectDB();
    console.log(`app are running at Port ${PORT}`);
})