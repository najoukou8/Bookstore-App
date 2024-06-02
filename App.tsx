import React from 'react';
import NavBar from './src/components/navbar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
      
        <Stack.Screen
          name="Register"
        component={Register}
        options={{ headerShown: false }}
          />
        <Stack.Screen
          name="Main"
          component={NavBar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
