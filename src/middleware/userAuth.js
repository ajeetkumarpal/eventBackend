import jwt from "jsonwebtoken";
import { privateKey } from "../config/serverConfig.js";

const userAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const decoded = jwt.verify(token, privateKey);

    req.userAuth = decoded;
    next();
  } catch (error) {
    console.log("error in user auth", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export default userAuth;
