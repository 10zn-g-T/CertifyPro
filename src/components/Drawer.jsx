import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Home,
  BadgeCheck,
  Info,
  Phone,
  Settings,
  LogIn,
  UserPlus,
  LogOut,
   LayoutDashboard,
  PlusCircle,
  BarChart3,
} from "lucide-react";


const publicMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];

const adminMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Issue", path: "/issue-certificate", icon: <PlusCircle size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },  
  { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];

const facultyMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Issue", path: "/issue-certificate", icon: <PlusCircle size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },
  { name: "Dashboard", path: "/faculty", icon: <LayoutDashboard size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];

const studentMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },
  { name: "Dashboard", path: "/student", icon: <LayoutDashboard size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];




function Drawer({ open, setOpen }) {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

let menuItems = publicMenu;

if (role === "admin") {
  menuItems = adminMenu;
} else if (role === "faculty") {
  menuItems = facultyMenu;
} else if (role === "student") {
  menuItems = studentMenu;
}


const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("name");

  toast.success("Logged Out Successfully");

  setOpen(false);

  navigate("/");
};


  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-[2px] z-40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="fixed top-20 left-0 h-[calc(100vh-80px)] w-72 bg-white border-r border-gray-200 shadow-2xl z-50 flex flex-col"
          >
{token && (
  <div className="px-4 py-4 border-b border-gray-150 mb-0">

    <h2 className="text-lg text-gray-500 capitalize">
      {role === "admin"
        ? "Administrator"
        : role === "faculty"
        ? "Faculty"
        : "Student"}
    </h2>

  </div>
)}
            
            {/* Menu */}
            <nav className="flex flex-col p-5 space-y-2">

  {menuItems.map((item) => (

    <Link
      key={item.name}
      to={item.path}
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
    >
      {item.icon}

      <span>{item.name}</span>

    </Link>

  ))}

</nav>

            {/* Footer */}
           <div className="border-t p-5">

  {!token ? (
    <div className="space-y-3">

      <Link
        to="/login"
        onClick={() => setOpen(false)}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border hover:bg-gray-100 transition"
      >
        <LogIn size={18} />
        Login
      </Link>

      <Link
        to="/register"
        onClick={() => setOpen(false)}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <UserPlus size={18} />
        Get Started
      </Link>

    </div>
  ) : (
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
    >
      <LogOut size={18} />
      Logout
    </button>
  )}

</div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;