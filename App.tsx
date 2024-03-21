/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import Register from './src/components/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


function App( ): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
  <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} /> 
  <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} /> 

  </Stack.Navigator>
  </NavigationContainer>
    );
}

export default App;
