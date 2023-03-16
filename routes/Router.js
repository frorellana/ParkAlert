import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../contexts/Auth';
import Loading from '../components/Loading';

export default function Router() {
  const context = useContext(AuthContext);
  if (context.load) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {console.log('context.authData:', context.authData)}
      {context.authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


