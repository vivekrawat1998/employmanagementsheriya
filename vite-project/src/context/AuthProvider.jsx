import React, { createContext, useEffect, useState } from "react";
import { setLocalStorage,getLocalStorage } from "../utils/localstorage";

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userdata, setuserdata] = useState({ employee: [], admin: [] });

  useEffect(() => {
    setLocalStorage();
    const { employee, admin } = getLocalStorage();
    setuserdata({ employee, admin });
  }, []);

  return (
    <Authcontext.Provider value={userdata}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
