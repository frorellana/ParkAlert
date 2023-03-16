import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false, title: '' }}
      />
      <Stack.Screen name="Login" component={Login} options={header} />
      <Stack.Screen name="Register" component={Register} options={header} />
    </Stack.Navigator>
  );
}

const header = {
  headerStyle: {
    backgroundColor: '#1D3557',
  },
  headerTintColor: '#fff',
};
