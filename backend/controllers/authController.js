import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Admin
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role: role || "admin",
    });

    res.status(201).json({
      message: "Admin Registered Successfully",
      admin,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login Admin
export const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      admin,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};