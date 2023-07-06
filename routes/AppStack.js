import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddSpot from '../screens/AddSpot';
import FindCar from '../screens/FindCar';
import Clear from '../screens/Clear';
import CarMap from '../screens/CarMap';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main Menu"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CarMap" component={CarMap} />
      <Stack.Screen name="AddSpot" component={AddSpot} />
      <Stack.Screen name="FindCar" component={FindCar} />
      <Stack.Screen name="Clear" component={Clear} />
    </Stack.Navigator>
  );
}
