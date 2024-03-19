import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { styles } from "../assets/styles";

const NavBar = () => {
    return (
        <View style={[styles.navbar, styles.navbarFlexBox]}>
        <View style={styles.home}>
          <View style={[styles.selected, styles.selectedLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.home1, styles.home1Layout]}>Home</Text>
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Text style={[styles.categories, styles.home1Layout]}>
            Categories
          </Text>
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/category1.png")}
          />
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/shopping-cart.png")}
          />
          <Text style={[styles.cart1, styles.cartTypo]}>Cart</Text>
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/account-box.png")}
          />
          <Text style={[styles.cart1, styles.cartTypo]}>Account</Text>
        </View>
      </View>
    )};



export default NavBar;
