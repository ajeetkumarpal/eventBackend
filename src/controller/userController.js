import { privateKey } from "../config/serverConfig.js";
import user from "../schema/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const userData = req.body;
console.log("user controller register");
    const userExist = await user.findOne({ email: userData.email });
    if (userExist) {
      return res.status(409).json({
        message: "user already exists",
        success: false,
      });
    }

    const newUser = await user.create(userData);
    res.status(201).json({
      message: "register successfull !",
      success: true,
      status: "register",
    });
  } catch (error) {
    console.log("error in registration", error);
    res.status(500).json({
      message: "error in registration",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const userData = req.body;
    const userExist = await user.findOne({ email: userData.email });
    if (!userExist) {
      return res.status(404).json({
        message: "user doesn't exist",
        success: false,
      });
    }
    const password = await bcrypt.compare(
      userData.password,
      userExist.password,
    );
    if (!password) {
      return res.status(401).json({
        message: "password incorrect",
        success: false,
      });
    }
    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      privateKey,
      { expiresIn: "90d" },
    );


    res.cookie("token", token, {
      httpOnly: true, 
      maxAge: 90 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({
      message: "login successfull !",
      success: true,
      token: token,
      status: "login",
      name: userExist.name,
    });
  } catch (error) {
    console.log("error in login", error);
    res.status(500).json({
      message: "error in login",
      success: false,
    });
  }
};
