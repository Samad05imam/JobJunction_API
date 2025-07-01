import jwt from "jsonwebtoken";

// middleware/auth.js
export const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // must match cookie name

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized: No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
};
