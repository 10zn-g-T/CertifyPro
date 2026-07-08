import { NavLink } from "react-router-dom";

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

function Sidebar() {

  const menuItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Certificates",
      path: "/certificates",
      icon: <FaCertificate />,
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

    {
      name: "Users",
      path: "/users",
      icon: <FaUsers />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },

    {
      name: "Logout",
      path: "/logout",
      icon: <FaSignOutAlt />,
    },

  ];

  return (

    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <div className="flex items-center gap-3 mb-10">

        <FaShieldAlt className="text-4xl text-blue-400"/>

        <h1 className="text-2xl font-bold">

          CertifyPro

        </h1>

      </div>

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

    </aside>

  );

}

export default Sidebar;