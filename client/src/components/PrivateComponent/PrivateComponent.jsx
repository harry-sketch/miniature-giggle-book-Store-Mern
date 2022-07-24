import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
