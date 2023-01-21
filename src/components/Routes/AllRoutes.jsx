import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "../pages/AllBooks/BooksPage";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../pages/Cart/CheckoutForm";
import Home from "../pages/Home";
import LoginSignup from "../pages/LoginSignup/Signup";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<LoginSignup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/allbooks?" element={<BooksPage />} />
    </Routes>
  );
};

export default AllRoutes;
