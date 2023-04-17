import { useState, createContext, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const FirebaseContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const newAuth = getAuth(app);
    setAuth(newAuth);
    //   const analytics = getAnalytics(app);
  }, []);

  return (
    <FirebaseContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContextProvider, FirebaseContext };
