import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import Issue from "./pages/Issue";
import Register from "./pages/Register";
import IssueCertificate from "./pages/IssueCertificate";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <Routes>

      {/* Pages with Navbar */}

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/verify" element={<Verify />} />

        <Route path="/issue" element={<Issue />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/register" element={<Register />} />

        <Route path="/issue-certificate" element={<IssueCertificate />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/login" element={<Login />} />

      </Route>

      {/* Login without Navbar */}

      <Route path="/login" element={<Login />} />

       </Routes>
  );
}

export default App;