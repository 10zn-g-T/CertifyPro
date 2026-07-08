import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <FaShieldAlt className="text-4xl text-blue-600" />

          <h1 className="text-3xl font-bold text-blue-600">
            CertifyPro
          </h1>

        </div>

        {/* Navigation */}

        <nav>

          <ul className="flex items-center gap-8 font-medium text-gray-700">

            <li>
              <Link
                 to="/"
                 className="hover:text-blue-600 transition-colors duration-300">
                 Home
              </Link>
            
            </li>

            <li>
                <Link 
                    to="/issue-certificate"
                 className="hover:text-blue-600 transition-colors duration-300">
                 Issue
                </Link>

            </li>

            <li>
              <Link 
                to="/verify"
                 className="hover:text-blue-600 transition-colors duration-300">
                 Verify
              </Link>
            </li>

            <li>
             <Link 
               to="/dashboard"
                 className="hover:text-blue-600 transition-colors duration-300">
                Dashboard
             </Link>
            </li>

          </ul>

        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-4">

            <Link
             to="/login"
             className="px-5 py-2 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition">
                 Login
            </Link>

            <Link
                to="/register"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                    Register
            </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;