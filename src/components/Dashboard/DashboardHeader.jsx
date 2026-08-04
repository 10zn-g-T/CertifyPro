import { FiLogOut } from "react-icons/fi";
import DarkModeToggle from "../DarkModeToggle";
import { Link } from "react-router-dom";

function DashboardHeader({ onLogout }) {
  return (


        <div className="mt-6 max-w-3xl">

<h2 className="text-5xl font-black leading-tight">

Welcome Back,
<span className="block text-blue-400">
{localStorage.getItem("name")}
</span>

</h2>

<p className="mt-4 text-gray-400 text-lg">

Manage certificates, verify records and monitor activities
from one beautiful dashboard.

</p>

</div>




  );
}

export default DashboardHeader;