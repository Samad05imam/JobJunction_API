import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token; // or from header

  if (!token) {
    return res.status(401).json({ message: "Login first", success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    next();
  } catch (err) {
    console.error("JWT ERROR:", err);
    return res.status(401).json({ message: "Invalid Token", success: false });
  }
};

export default isAuthenticated;
