import { useState } from "react";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import API from "../api/certificateApi";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

   if (Object.keys(newErrors).length === 0) {
  try {
    const response = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);
    
    localStorage.setItem("role", response.data.admin.role);
    localStorage.setItem("name", response.data.admin.name);

   
toast.success("Login Successful");

const role = response.data.admin.role;

if (role === "admin") {
  navigate("/admin");
} else if (role === "faculty") {
  navigate("/faculty");
} else if (role === "student") {
  navigate("/student");
} else {
  navigate("/");
}

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Login Failed"
    );
  }
}
  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your CertifyPro account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <Button
            text="Login"
            type="submit"
          />

        </form>

      </div>

    </div>
  );
  }

export default Login;