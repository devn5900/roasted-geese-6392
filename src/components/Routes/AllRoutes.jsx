import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "../pages/AllBooks/BooksPage";
import SignlepageBook from "../pages/AllBooks/SignlepageBook";
import Cart from "../pages/Cart/Cart";
import CheckoutForm from "../pages/Cart/CheckoutForm";
import Payment from "../pages/Cart/Payment";
import PaymentComplete from "../pages/Cart/PaymentComplete";
import Home from "../pages/Home";
import LoginSignup from "../pages/LoginSignup/Signup";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutForm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/orderplaced" element={<PaymentComplete />} />
      <Route path="/allbooks?" element={<BooksPage />} />
      <Route path="/bookdetails/:id" element={<SignlepageBook />} />
    </Routes>
  );
};

export default AllRoutes;
