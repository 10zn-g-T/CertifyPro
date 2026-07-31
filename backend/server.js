import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import certificateRoutes from "./routes/certificateRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();


// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/certificates", certificateRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 CertifyPro Backend is Running...");
});

const PORT = process.env.PORT || 8000;

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

