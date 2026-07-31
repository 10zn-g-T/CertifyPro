import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Menu,
  ChevronDown,
  LayoutDashboard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import Drawer from "./Drawer";
import { motion } from "framer-motion";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
const [notificationOpen, setNotificationOpen] = useState(false);

const notificationCount = 2;

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  let dashboardPath = "/";

  if (role === "admin") {
    dashboardPath = "/admin";
  } else if (role === "faculty") {
    dashboardPath = "/faculty";
  } else if (role === "student") {
    dashboardPath = "/student";
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");

    toast.success("Logged Out Successfully");

    setProfileOpen(false);

    navigate("/");
  };

  return (
    <>
<motion.header
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200"
>
        <div className="max-w-1xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

           <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-300"
>
  <motion.div
  initial={false}
  animate={{
    rotate: menuOpen ? 180 : 0,
    scale: menuOpen ? 1.1 : 1,
  }}
  transition={{
    duration: 0.3,
    ease: "easeInOut",
  }}
>
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </motion.div>
</button>


            <Link to="/" className="flex items-center gap-3">

              <div className="bg-blue-600 p-2 rounded-xl">
                <ShieldCheck className="text-white" size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  CertifyPro
                </h1>

                <p className="text-xs text-gray-500">
                  Digital Certificate Platform
                </p>
              </div>

            </Link>

          </div>

          {/* Right */}

          {!token ? (
            <div className="hidden md:flex items-center gap-4">

              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg"
              >
                Get Started
              </Link>

            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
            <div className="relative">

  <button
    onClick={() => setNotificationOpen(!notificationOpen)}
    className="relative p-3 rounded-xl hover:bg-gray-100 transition"
  >
    <Bell size={24} />

    {notificationCount > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
        {notificationCount}
      </span>
    )}
  </button>

</div>
             

            <div className="relative hidden md:block">

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
              >

                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-lg">
                  {name?.charAt(0).toUpperCase()}
                </div>

                <div className="text-left">

                  <p className="text-xs opacity-80">
                    Welcome
                  </p>

                  <p className="font-semibold">
                    {name}
                  </p>

                </div>

                <ChevronDown size={18} />

              </button>

              {profileOpen && (

                <div className="absolute right-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl border overflow-hidden">

                  <div className="px-6 py-5 border-b">

                    <h3 className="font-bold text-lg">
                      {name}
                    </h3>

                    <p className="text-gray-500 capitalize">
                      {role}
                    </p>

                  </div>

                  

                

                </div>

              )}

            </div></div>
          )}

        </div>

      </motion.header>

      <Drawer
        open={menuOpen}
        setOpen={setMenuOpen}
      />
    </>
  );
}

export default Navbar;