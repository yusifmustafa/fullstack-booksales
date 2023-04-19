import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContextProvider";

const ProtectedRoutes = (props) => {
  const context = useContext(ProductContext);
  const { checkTokenExpiration } = context;
  const { Component } = props;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  setInterval(() => {
    checkTokenExpiration();
  }, 5 * 60 * 1000);
  return (
    <div>
      <Component />
    </div>
  );
};
export default ProtectedRoutes;
