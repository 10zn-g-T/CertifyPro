import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import toast from "react-hot-toast";

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

      <Sidebar onLogout={handleLogout} />

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;