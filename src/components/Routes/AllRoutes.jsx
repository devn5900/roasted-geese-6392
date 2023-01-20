import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "../pages/AllBooks/BooksPage";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home";
import LoginSignup from "../pages/LoginSignup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<LoginSignup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/allbooks?" element={<BooksPage />} />
    </Routes>
  );
};

export default AllRoutes;
