import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Unauthorized..Please Log In" });
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  // Attach the decoded token to the request
  req.user = decodedToken;

  next();
};
