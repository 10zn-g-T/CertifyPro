import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Verify from "./pages/Verify";
import Issue from "./pages/Issue";
import Register from "./pages/Register";
import IssueCertificate from "./pages/IssueCertificate";
import AdminDashboard from "./pages/AdminDashboard";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Analytics from "./pages/Analytics";

import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Routes>

      {/* Pages with Navbar */}

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/verify" element={<Verify />} />

        <Route path="/issue" element={<Issue />} />

    
        
        <Route path="/register" element={
                                        
                                          <Register />
          }  />

        <Route
  path="/faculty"
  element={
    <ProtectedRoute allowedRoles={["faculty"]}>
      <FacultyDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/student"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/issue-certificate" element={
                                                    <ProtectedRoute allowedRoles={["admin", "faculty"]}>
                                                    <IssueCertificate />
                                                    </ProtectedRoute>
                                                  } />

        <Route path="/admin" element={  <ProtectedRoute allowedRoles={["admin"]}>
                                        <AdminDashboard />
                                        </ProtectedRoute>
                                      } />

        <Route
  path="/analytics"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <Analytics />
    </ProtectedRoute>
  }
/>     

        <Route path="/login" element={<Login />} />

      </Route>
    </Routes>
  );
}

export default App;