import { Link, NavLink } from "react-router-dom";
import { ShieldCheck, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Issue", path: "/issue-certificate" },
    { name: "Verify", path: "/verify" },
    { name: "Dashboard", path: "/dashboard" },
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
        </div>
      )}
    </header>
  );
}

export default Navbar;