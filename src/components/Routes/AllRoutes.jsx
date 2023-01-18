import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LoginSignup from "../pages/LoginSignup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<LoginSignup />} />
    </Routes>
  );
};

export default AllRoutes;
