import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not Authorized. No Token.",
      });
    }

    // Remove "Bearer " from token
    const token = authHeader.split(" ")[1];

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save admin info in request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default protect;