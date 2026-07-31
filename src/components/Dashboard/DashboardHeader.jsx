import { FiLogOut } from "react-icons/fi";
import DarkModeToggle from "../DarkModeToggle";
import { Link } from "react-router-dom";

function DashboardHeader({ onLogout }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-6 p-8 shadow-xl">

      {/* Background circles */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-10 left-20 w-32 h-32 bg-white/10 rounded-full"></div>

      <div className="relative flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-black">
            👋 Welcome Back
          </h1>
          

          <p className="mt-3 text-blue-100 text-lg">
            Manage certificates, verify records and monitor analytics.
          </p>
        </div>

        <div className="flex items-center gap-4">
        <DarkModeToggle />
 
       
        </div>

      </div>

    </div>
  );
}

export default DashboardHeader;