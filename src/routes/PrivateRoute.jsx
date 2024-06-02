import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: RouteComponent }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    alert("로그인이 필요한 페이지입니다");
    return <Navigate to={`/auth/login`} />;
  }
  return RouteComponent;
};

export default PrivateRoute;
