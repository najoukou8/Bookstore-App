import React from 'react';



import Home from './src/components/Home';
import SignIn from './src/components/SignIn';
import Register from './src/components/Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './src/components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './src/screens/BookDetails';

function App( ): React.JSX.Element {
    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
  <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} /> 
  <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignIn} /> 

  </Stack.Navigator>
  </NavigationContainer>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NavBar"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    );

}

export default App;
