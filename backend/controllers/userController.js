import Admin from "../models/Admin.js";

export const updateProfile = async (req, res) => {
  try {

    const { name, email } = req.body;

    const user = await Admin.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name = name;
    user.email = email;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};