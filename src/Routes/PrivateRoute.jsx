import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return (
      <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
