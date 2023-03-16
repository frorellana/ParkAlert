import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddSpot from './screens/AddSpot';
import FindCar from './screens/FindCar';
import Clear from './screens/Clear';
import Router from './routes/Router';
import { AuthProvider } from './contexts/Auth';
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   {/* <Stack.Navigator>
    //     <Stack.Screen
    //       name="Main Menu"
    //       component={Home}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name="AddSpot" component={AddSpot} />
    //     <Stack.Screen name="FindCar" component={FindCar} />
    //     <Stack.Screen name="Clear" component={Clear} />
    //   </Stack.Navigator> */}
    //   <AuthStack />
    // </NavigationContainer>
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

// const MyTheme = {
//   colors: {
//     background: 'rgb(0, 230, 242)',
//   },
// };
