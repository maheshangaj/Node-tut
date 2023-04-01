import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateComponent = () => {
    //this to line use for whiout login does not acces to navbar
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateComponent;
