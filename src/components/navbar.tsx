import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from "../screens/Home"
import Search from "../screens/Search"
import Account from "../screens/Account"
import Cart from "../screens/Cart"

import { StyleSheet } from 'react-native';

const tab = createBottomTabNavigator();



const NavBar = () => {
    return (
        <NavigationContainer>
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
              <tab.Screen name='Home' component={Home} />
              <tab.Screen name='Search' component={Search} />
              <tab.Screen name='Cart' component={Cart} />
              <tab.Screen name='Account' component={Account} />
          </tab.Navigator>
        </NavigationContainer>
    )};

const styles = StyleSheet.create({
      Icon: {
        fontSize: 24,
        color: 'black',
      }
});

export default NavBar;
