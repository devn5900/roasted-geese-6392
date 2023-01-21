import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [signedupUser, setSignedupUser] = useState(
    JSON.parse(localStorage.getItem("codeBookSignUp")) || {}
  );
  useEffect(() => {
    userData &&
      localStorage.setItem("codeBookSignUp", JSON.stringify(userData) || {});
  }, [userData]);

  const [logged, setLogged] = useState({});
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        signedupUser,
        userData,
        setUserData,
        logged,
        setLogged,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
