import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../firebase';
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // need to retreive user if exists
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('auth changed');
      if (user) {
        // user signed in
        setAuthData(user);
      } else {
        setAuthData(null);
      }
      setloading(false);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const loginRequest = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // setAuthData(userCredentials.user);
        // above not need due to onAuthStateChanged
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  const logoutRequest = () => {
    signOut(auth)
      .then(() => {
        // need to set AuthData to null to go back to login page
        // above not need due to onAuthStateChanged
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    // what do we want consumers to have access to
    <AuthContext.Provider
      value={{ authData, loginRequest, logoutRequest, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
