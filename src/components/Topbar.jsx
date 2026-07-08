import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <header className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center mb-8">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back 👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search Box */}
        <div className="relative">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Notification */}
        <button className="text-2xl text-gray-600 hover:text-blue-600 transition">
          <FaBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-blue-600" />

          <div>

            <p className="font-semibold">
              Tenzing
            </p>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;
