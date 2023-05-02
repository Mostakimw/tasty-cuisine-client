import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    registerUser,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
