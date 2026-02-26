import { birthday } from "../schema/birthday.js";
import { concert } from "../schema/concert.js";
import { cultural } from "../schema/cultural.js";
import { sport } from "../schema/sport.js";
import { wedding } from "../schema/wedding.js";

const allBookingController = async(req, res) => {
  try {
    const id = req.userAuth.id;
    const weddingData =await wedding.find({ userId: id });
    const concertData =await concert.find({ userId: id });
    const birthdayData =await birthday.find({ userId: id });
    const culturalData =await cultural.find({ userId: id });
    const sportData =await sport.find({ userId: id });

    res.status(200).json({
      message: "all event",
      success: true,
      weddingData: weddingData,
      concertData: concertData,
      birthdayData: birthdayData,
      culturalData: culturalData,
      sportData: sportData,
    });
  } catch (error) {
    console.log("error in allBookingController", error);
    res
      .status(500)
      .json({ message: "error in allbookingcontroller", success: false });
  }
};
export default allBookingController;
