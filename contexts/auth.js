import React, { useContext, useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const [load, setLoad] = useState(true);
  useEffect(() => {
    dataFromStorage();
  }, []);
  const dataFromStorage = async () => {
    const response = await AsyncStorage.getItem('@AuthData');
    const data = await JSON.parse(response);
    console.log('this is data from storage', data);
    setAuthData(data);
    setLoad(false);
  };
  console.log('authProvider', authData);
  const loginRequest = async () => {
    const mockFetch = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            email: 'abc@gmail.com',
            name: 'Lucas Garcez',
          });
        }, 1000);
      });
    };
    const res = await mockFetch();
    setAuthData(res);
    AsyncStorage.setItem('@AuthData', JSON.stringify(res));
  };

  const logoutRequest = async () => {
    setAuthData(undefined);
    await AsyncStorage.removeItem('@AuthData');
  };

  return (
    // what do we want consumers to have access to?
    <AuthContext.Provider
      value={{ authData, loginRequest, logoutRequest, load }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
