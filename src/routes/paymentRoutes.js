import express from "express";
import { paymentController, verifyPayment } from "../controller/rozarpayController.js";
import userAuth from "../middleware/userAuth.js";

const paymentRouter=express.Router();

paymentRouter.post("/payment-order",paymentController);
paymentRouter.post("/payment-verify",verifyPayment);

export default paymentRouter;