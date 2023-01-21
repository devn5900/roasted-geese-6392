import { useToast } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const toast = useToast();
  if (!isAuth) {
    return (
      <>
        <Navigate to="/cart" />
      </>
    );
  }

  return children;
};
export default PrivateRoute;
