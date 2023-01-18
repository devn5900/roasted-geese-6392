import React, { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [logged, setLogged] = useState({});
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userData, setUserData, logged, setLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
