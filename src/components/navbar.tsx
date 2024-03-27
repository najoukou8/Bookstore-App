import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from "../screens/Home"
import Search from "../screens/Search"
import Account from "../screens/Account"
import Cart from "../screens/Cart"

import BookDetails from '../screens/BookDetails';


import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
    <HomeStack.Screen name="BookDetails" component={BookDetails}  options={{ headerShown: false }} />
  </HomeStack.Navigator>
);



const NavBar = () => {
    return (
        
          <tab.Navigator 
            screenOptions={({route}) => ({ 
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
              if(route.name == 'Home'){
                iconName = 'home';
              }else if(route.name == 'Search'){
                iconName = 'search-outline';
              }else if(route.name == 'Account'){
                iconName = 'person-outline';
              }else if(route.name == 'Cart'){
                iconName = 'cart-outline';
              }

              return <Icon name={iconName} style={styles.Icon}/>
              }
            })}
            >
              <tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }}/>
              
              <tab.Screen name='Search' component={Search} options={{ headerShown: false }} />
              <tab.Screen name='Cart' component={Cart} options={{ headerShown: false }}/>
              <tab.Screen name='Account' component={Account} options={{ headerShown: false }}/>
          </tab.Navigator>
    )};

const styles = StyleSheet.create({
      Icon: {
        fontSize: 24,
        color: 'black',
      }
});

export default NavBar;
