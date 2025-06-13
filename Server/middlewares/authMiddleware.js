// middleware/authMiddleware.js
//this middleware is used to check if the user is authenticated or not
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" }); //delete the token if its empty or it doesnt start with Bearer 
  }

  const token = authHeader.split(" ")[1]; //split the taken so it becomes "bearer" and "^&acdSe2#"

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;
