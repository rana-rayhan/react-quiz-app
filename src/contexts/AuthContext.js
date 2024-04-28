import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  const login = async (email, password) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);

    // const user = auth.currentUser;
    // setCurrentUser({ ...user });
  };
  const logout = async (e) => {
    const auth = getAuth();
    await signOut(auth);
  };

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
