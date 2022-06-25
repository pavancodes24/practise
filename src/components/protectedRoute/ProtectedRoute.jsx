import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let auth = { token: false };
  if (!auth.token) {
    alert("this is private route");
  }
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
