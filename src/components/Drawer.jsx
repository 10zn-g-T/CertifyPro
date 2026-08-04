import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
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
  { name: "About", section: "about", icon: <Info size={20} /> },
  { name: "Contact", section: "contact", icon: <Phone size={20} /> },
];

const adminMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Issue", path: "/issue-certificate", icon: <PlusCircle size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },  
  { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
  { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", section: "about", icon: <Info size={20} /> },
  { name: "Contact", section: "contact", icon: <Phone size={20} /> },
];

const facultyMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Issue", path: "/issue-certificate", icon: <PlusCircle size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },
  { name: "Dashboard", path: "/faculty", icon: <LayoutDashboard size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", section: "about", icon: <Info size={20} /> },
  { name: "Contact", section: "contact", icon: <Phone size={20} /> },
];

const studentMenu = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Verify", path: "/verify", icon: <BadgeCheck size={20} /> },
  { name: "Dashboard", path: "/student", icon: <LayoutDashboard size={20} /> },
  { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  { name: "About", section: "about", icon: <Info size={20} /> },
  { name: "Contact", section: "contact", icon: <Phone size={20} /> },
];



function Drawer({ open, setOpen }) {
  
const location = useLocation();

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

const handleSectionNavigation = (section) => {
  setOpen(false);

  // If already on Home, scroll directly
  if (location.pathname === "/") {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    return;
  }

  // Otherwise go Home and tell Home which section to scroll to
  navigate("/", {
    state: {
      scrollTo: section,
    },
  });
};

const handleHomeNavigation = () => {
  setOpen(false);

  // If already on Home, scroll to Hero (top)
  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  // Otherwise go Home and scroll to top
  navigate("/", {
    state: {
      scrollTo: "top",
    },
  });
};


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
            className="fixed top-20 left-0 right-0 bottom-0 bg-slate-950/60 backdrop-blur-sm z-40"
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
className="fixed top-20 left-0 h-[calc(100vh-80px)] w-72
bg-slate-900/90
backdrop-blur-2xl
border-r border-slate-700
shadow-[0_20px_60px_rgba(0,0,0,.45)]
z-50 flex flex-col text-white"
          >
{token && (
  <div className="px-5 py-5 border-b border-slate-700">

    <h2 className="text-lg font-semibold text-white capitalize">
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
  {menuItems.map((item) =>
  item.name === "Home" ? (
  <button
    key={item.name}
    onClick={handleHomeNavigation}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"  >
    {item.icon}
    <span>{item.name}</span>
  </button>
    ) : item.section ? (
      <button
        key={item.name}
        onClick={() => handleSectionNavigation(item.section)}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"      >
        {item.icon}
        <span>{item.name}</span>
      </button>
    ) : (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setOpen(false)}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"      >
        {item.icon}
        <span>{item.name}</span>
      </Link>
    )
  )}
</nav>

            {/* Footer */}
           <div className="border-t border-slate-700 p-5">

  {!token ? (
    <div className="space-y-3">

      <Link
        to="/login"
        onClick={() => setOpen(false)}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"      >
        <LogIn size={18} />
        Login
      </Link>

      <Link
        to="/register"
        onClick={() => setOpen(false)}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"      >
        <UserPlus size={18} />
        Get Started
      </Link>

    </div>
  ) : (
    <button
      onClick={handleLogout}
className="
flex items-center gap-3
p-3
rounded-xl
text-gray-300
hover:bg-slate-800
hover:text-blue-400
transition-all duration-300
"    >
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