import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  const location = useLocation();

   const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/faculty") ||
    location.pathname.startsWith("/student");

  return (
    <>
    <Navbar />

      <main className={hideNavbar ? "" : "pt-24"}>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;