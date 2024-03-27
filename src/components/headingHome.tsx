import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { FontSize, FontFamily, Color } from "../assets/style/globalStyles";

interface HeadingProps {
  title: string;
  onPressBack: () => void;
}

const HeadingHome: React.FC<HeadingProps> = ({ title, onPressBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPressBack} >
        <Icon name="search-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 18,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_300,
    flex: 1, 
    textAlign: 'center', 
  },

});

export default HeadingHome;
