import { Navigate } from "react-router-dom";

export const RequireAdminAuth = ({ children }) => {
  const logged = localStorage.getItem("logged") === "true" ? true : false;

  if (!logged) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};
