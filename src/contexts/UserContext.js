import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const user = { displayName: "Maruf" };
  const signIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const AuthInfo = { user, signIn };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
