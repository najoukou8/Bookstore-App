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
