import {
  RAZORPAY_API_KEY,
  RAZORPAY_KEY_SECRET,
} from "../config/serverConfig.js";
import Razorpay from "razorpay";
import crypto from "crypto";
export const paymentController = async (req, res) => {
  try {
    const { amountData } = req.body;
    const razarpayInstance = new Razorpay({
      key_id: RAZORPAY_API_KEY,
      key_secret: RAZORPAY_KEY_SECRET,
    });
    const option = {
      amount: amountData * 100,
      currency: "INR",
      receipt: "receipt" + new Date().getTime(),
      notes: { userName: "ajeetkumar" },
      payment_capture: 1,
    };
    const response = await razarpayInstance.orders.create(option);
    res.status(201).json({
      message: "create order payment successfully",
      success: true,
      key: RAZORPAY_API_KEY,
      orderId: response.id,
      data: response,
    });
  } catch (error) {
    console.log("error in payment controller");
    res.status(500).json({ message: error.message, success: false });
  }
};

export const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const generated_signature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      res.status(200).json({ success: true, message: "Payment verified!" });
    } else {
      res.status(400).json({ success: false, message: "signature mismatch" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "payment failed " });
    console.log("error in payment controller", error);
  }
};
