import API from "../api/certificateApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

function Register() {
  // State Variables
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("admin");


  // Error State
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  // Form Submit
  const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Validate Name
        if (!name.trim()) {
            newErrors.name = "Full Name is required";
        }

        // Validate Email
        if (!email.trim()) {
            newErrors.email = "Email is required";
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }


        // Validate Password
        if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        // Validate Confirm Password
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Update Errors
        setErrors(newErrors);

        // If No Errors
        if (Object.keys(newErrors).length === 0) {

          try {
  await API.post("/auth/register", {
    name,
    email,
    password,
    role,
  });

  toast.success("Admin Registered Successfully");

  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  setRole("admin");

  navigate("/login");

} catch (error) {
  toast.error(
    error.response?.data?.message || "Registration Failed"
  );
}
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

         <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Join CertifyPro to manage certificates securely.
                </p>


                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={errors.name}
                    />
                
                    {/* Email */}
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={errors.email}
                    />
   <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Role
  </label>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="admin">Admin</option>
    <option value="faculty">Faculty</option>
    <option value="student">Student</option>
  </select>
</div>

                    {/* Password */}
                    <PasswordInput
                        label="Password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                    />

                    {/* Confirm Password */}
                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={errors.confirmPassword}
                    />

                    {/* Submit Button */}
                    <Button
                        text="Create Account"
                        type="submit"
                    />
                </form>

            </div>

        </div>
    );
}

export default Register