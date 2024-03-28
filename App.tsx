import React from 'react';
import NavBar from './src/components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    
    <NavigationContainer>
      <NavBar/>
    </NavigationContainer>
  );
}

export default App;
