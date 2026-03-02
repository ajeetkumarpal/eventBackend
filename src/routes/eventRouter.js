import express from "express";

import { birthdayController, concertController, culturalController, sportController, weddingController } from "../controller/eventController.js";
import allBookingController from "../controller/allBookingController.js";
import userAuth from "../middleware/userAuth.js";

const eventRouter=express.Router();

// eventRouter.post("/concert",userAuth, concertController);
// eventRouter.post("/cultural",userAuth,culturalController);
// eventRouter.post("/birthday",userAuth,birthdayController);
// eventRouter.post("/sport",userAuth,sportController);
// eventRouter.post("/wedding",userAuth,weddingController);

// eventRouter.get("/booking",userAuth,allBookingController);
eventRouter.post("/concert", concertController);
eventRouter.post("/cultural",culturalController);
eventRouter.post("/birthday",birthdayController);
eventRouter.post("/sport",sportController);
eventRouter.post("/wedding",weddingController);

eventRouter.get("/booking",allBookingController);


export default eventRouter;