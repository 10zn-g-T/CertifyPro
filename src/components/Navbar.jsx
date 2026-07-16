import { Link, NavLink } from "react-router-dom";
import { ShieldCheck, Menu, ChevronDown,
  User,
  LayoutDashboard,
  Settings,
  LogOut, } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
 
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

    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/" },
  
    { name: "Verify", path: "/verify" },
  
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!token ? (
    <>
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
    </>
  ) : (
    <div className="relative">

  <button
    onClick={() => setProfileOpen(!profileOpen)}
    className="flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
  >
    <div className="w-9 h-9 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
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
    <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-2xl border overflow-hidden">

      <div className="px-5 py-4 border-b">

        <p className="font-bold text-slate-800">
          {name}
        </p>

        <p className="text-sm text-gray-500 capitalize">
          {role}
        </p>

      </div>

      <Link
        to={dashboardPath}
        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100"
      >
        <LayoutDashboard size={18} />
        Dashboard
      </Link>

      <Link
        to="/settings"
        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100"
      >
        <Settings size={18} />
        Settings
      </Link>

      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-5 py-4 text-red-600 hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  )}

</div>
  )}

        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
  <div className="md:hidden bg-white border-t">

    {navItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        className="block px-6 py-4 hover:bg-gray-100"
      >
        {item.name}
      </NavLink>
    ))}

    {!token ? (
      <>
        <Link
          to="/login"
          className="block px-6 py-4 hover:bg-gray-100"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="block px-6 py-4 bg-blue-600 text-white"
        >
          Get Started
        </Link>
      </>
    ) : (
      <Link
        to={dashboardPath}
        className="block px-6 py-4 bg-blue-600 text-white"
      >
        Dashboard
      </Link>
    )}

  </div>
)}
    </header>
  );
}

export default Navbar;