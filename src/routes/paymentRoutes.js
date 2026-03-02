import express from "express";
import { paymentController, verifyPayment } from "../controller/rozarpayController.js";


const paymentRouter=express.Router();

paymentRouter.post("/payment-order",paymentController);
paymentRouter.post("/payment-verify",verifyPayment);

export default paymentRouter;