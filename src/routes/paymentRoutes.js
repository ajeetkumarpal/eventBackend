import express from "express";
import { paymentController, verifyPayment } from "../controller/rozarpayController.js";
import userAuth from "../middleware/userAuth.js";

const paymentRouter=express.Router();

paymentRouter.post("/payment-order",userAuth,paymentController);
paymentRouter.post("/payment-verify",userAuth,verifyPayment);

export default paymentRouter;