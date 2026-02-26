import { birthday } from "../schema/birthday.js";
import { concert } from "../schema/concert.js";
import { cultural } from "../schema/cultural.js";
import { sport } from "../schema/sport.js";
import { wedding } from "../schema/wedding.js";

const concertController = async (req, res) => {
  try {
    const concertDetail = req.body;
    const userId = req.userAuth.id;
  
    const concertData = await concert.create({
      ...concertDetail,
      userId: userId,
    });
    res.status(201).json({
      message: "concert event data is created",
      data: concertData,
      success: true,
    });
  } catch (error) {
    console.log("error in concertController");
    res.status(500).json({
      message: error,
      success: false,
    });
  }
};


const culturalController = async (req, res) => {
  try {
    const { name, email, packageName, packagePrice, eventName } = req.body;
    if (!name || !email || !packageName || !packagePrice || !eventName) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const userId = req.userAuth.id;
    const culturalData = await cultural.create({
      name,
      email,
      eventName,
      package: packageName,
      amount: packagePrice,
      userId: userId,
    });
    res.status(201).json({
      message: "cultural event data is created",
      data: culturalData,
      success: true,
    });
  } catch (error) {
    console.log("error in culturalController");
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};


const sportController = async (req, res) => {
  try {
    const sportDetail = req.body;
    const userId = req.userAuth.id;
    
    if (
      !sportDetail.name ||
      !sportDetail.email ||
      !sportDetail.package ||
      !sportDetail.amount ||
      !sportDetail.phone ||
      !sportDetail.teamName
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const sportData = await sport.create({ ...sportDetail, userId });
    res.status(201).json({
      message: "sport event data is created",
      data: sportData,
      success: true,
    });
  } catch (error) {
    console.log("error in sportController");
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};


const birthdayController = async (req, res) => {
  try {
    const birthdayDetail = req.body;
    const userId = req.userAuth.id;
    if (
      !birthdayDetail.name ||
      !birthdayDetail.email ||
      !birthdayDetail.package ||
      !birthdayDetail.amount
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const birthdayData = await birthday.create({ ...birthdayDetail, userId });
    res.status(201).json({
      message: "birthday event data is created",
      data: birthdayData,
      success: true,
    });
  } catch (error) {
    console.log("error in birthdayController");
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};


const weddingController = async (req, res) => {
  try {
    const weddingDetail = req.body;
    const userId = req.userAuth.id;
    if (
      !weddingDetail.date ||
      !weddingDetail.time ||
      !weddingDetail.guests ||
      !weddingDetail.amount
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const weddingData = await wedding.create({ ...weddingDetail, userId });
    res.status(201).json({
      message: "wedding event data is created",
      data: weddingData,
      success: true,
    });
  } catch (error) {
    console.log("error in weddingController");
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};


export {
  concertController,
  culturalController,
  sportController,
  birthdayController,
  weddingController,
};
