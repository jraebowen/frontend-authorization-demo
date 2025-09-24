import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function ProtectedRoute({ children, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  const { isLoggedIn } = useContext(AppContext);

  if (isLoggedIn && anonymous) {
    return <Navigate to={from} />;
  }
  if (!isLoggedIn && !anonymous) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
