import React from 'react';
import { StyleSheet } from 'react-native';
import NavBar from './src/components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetails from './src/screens/BookDetails';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    
    <NavigationContainer>
      <NavBar/>
    </NavigationContainer>
  );
}

export default App;
