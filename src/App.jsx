import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Verify from "./pages/Verify";
import Issue from "./pages/Issue";
import Register from "./pages/Register";
import IssueCertificate from "./pages/IssueCertificate";
import Dashboard from "./pages/Dashboard";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

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
<Route path="/settings" element={<Settings />} />
        <Route
  path="/faculty"
  element={
    <ProtectedRoute allowedRoles={["faculty"]}>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/student"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/issue-certificate" element={
                                                    <ProtectedRoute allowedRoles={["admin", "faculty"]}>
                                                    <IssueCertificate />
                                                    </ProtectedRoute>
                                                  } />

        <Route path="/admin" element={  <ProtectedRoute allowedRoles={["admin"]}>
                                        <Dashboard />
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