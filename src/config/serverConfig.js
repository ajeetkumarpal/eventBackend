import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT || 4000;
const MONGODB_URL=process.env.MONGODB_URL;
const privateKey=process.env.PRIVATE_KEY;
const RAZORPAY_API_KEY=process.env.RAZORPAY_API_KEY;
const RAZORPAY_KEY_SECRET=process.env.RAZORPAY_KEY_SECRET;

export {PORT,privateKey,MONGODB_URL,RAZORPAY_API_KEY,RAZORPAY_KEY_SECRET};