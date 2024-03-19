import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { styles } from "../assets/style/Styles";

const NavBar = () => {
    return (
        <View style={[styles.navbar, styles.navbarFlexBox]}>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons/home.png")}
          />
          <Text style={[styles.home1, styles.home1Layout]}>Home</Text>
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Text style={[styles.categories, styles.home1Layout]}>
            Genres
          </Text>
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons/menu.png")}
          />
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons/trolley.png")}
          />
          <Text style={[styles.cart1, styles.cartTypo]}>Cart</Text>
        </View>
        <View style={styles.home}>
          <View style={[styles.selected1, styles.selectedLayout]} />
          <Image
            style={[styles.categoryIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icons/user.png")}
          />
          <Text style={[styles.cart1, styles.cartTypo]}>Account</Text>
        </View>
      </View>
    )};



export default NavBar;
