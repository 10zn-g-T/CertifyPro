import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {

  // Get token from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but role is not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  // If token exists, show the protected page
  return children;
}

export default ProtectedRoute;