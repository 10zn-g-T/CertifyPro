import { link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FaHome,
  FaCertificate,
  FaPlusCircle,
  FaCheckCircle,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

const role = localStorage.getItem("role");


function Sidebar() {

  const adminMenu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <FaHome />,
  },
  {
    name: "Issue Certificate",
    path: "/issue-certificate",
    icon: <FaPlusCircle />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: <FaCertificate />,
  },
  {
    name: "Verify",
    path: "/verify",
    icon: <FaCheckCircle />,
  },
];

const facultyMenu = [
  {
    name: "Faculty Dashboard",
    path: "/faculty",
    icon: <FaHome />,
  },
  {
    name: "Issue Certificate",
    path: "/issue-certificate",
    icon: <FaPlusCircle />,
  },
  {
    name: "Verify",
    path: "/verify",
    icon: <FaCheckCircle />,
  },
];

const studentMenu = [
  {
    name: "Student Dashboard",
    path: "/student",
    icon: <FaHome />,
  },
  {
    name: "My Certificates",
    path: "/my-certificates",
    icon: <FaCertificate />,
  },
  {
    name: "Verify",
    path: "/verify",
    icon: <FaCheckCircle />,
  },
];

let menuItems = [];

if (role === "admin") {
  menuItems = adminMenu;
} else if (role === "faculty") {
  menuItems = facultyMenu;
} else if (role === "student") {
  menuItems = studentMenu;
}


const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("name");

  toast.success("Logged Out Successfully");

  navigate("/login");
};

  return (

    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <Link
  to="/"
  className="flex items-center gap-3 mb-10 hover:opacity-90 transition"
>
  <FaShieldAlt className="text-4xl text-blue-400" />

  <div>
    <h1 className="text-2xl font-bold">
      CertifyPro
    </h1>

    <p className="text-xs text-slate-400">
      Certificate Management
    </p>
  </div>
</Link>

      <nav className="space-y-2">

        {menuItems.map((item) => (

          <NavLink

            key={item.name}

            to={item.path}

            className={({ isActive }) =>

              `flex items-center gap-4 px-4 py-3 rounded-xl transition

              ${
                isActive

                  ? "bg-blue-600"

                  : "hover:bg-slate-800"

              }`

            }

          >

            <span className="text-xl">

              {item.icon}

            </span>

            <span>

              {item.name}

            </span>

          </NavLink>

        ))}

      </nav>
<Link
  to="/"
  className="mt-10 w-full flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 rounded-xl py-3 font-semibold transition duration-300"
>
  🌐 Visit Website
</Link>

      <button
  onClick={handleLogout}
  className="mt-10 w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-xl py-3 font-semibold transition duration-300"
>
  <FaSignOutAlt />
  Logout
</button>

    </aside>

  );

}

export default Sidebar;