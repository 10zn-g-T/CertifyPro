import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

function Register() {
  // State Variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error State
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [success, setSuccess] = useState("");

  // Form Submit
  const handleSubmit = (e) => {
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

  setSuccess("🎉 Registration Successful!");

  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");

  setErrors({});

  console.log({
    name,
    email,
    password,
    confirmPassword,
  });
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

        {success && (
  <div className="mb-6 rounded-lg bg-green-100 border border-green-400 text-green-700 p-4">
    {success}
  </div>
)}

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