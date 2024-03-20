import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../assets/style/globalStyles";

const Heading = () => {
  return (
    <View style={[styles.heading, styles.headingLayout]}>
      <View style={[styles.arrowBackParent, styles.headingLayout]}>
        <Image
          style={styles.arrowBackIcon}
          resizeMode="cover"
          source={require("../assets/icons/back.png")}
        />
        <Text style={styles.classics}>Classics</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingLayout: {
    width: 320,
    position: "absolute",
  },
  arrowBackIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  classics: {
    fontSize: FontSize.android12BodyMediumSemibold_size,
    lineHeight: 32,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  arrowBackParent: {
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    top: 64,
    left: 20,
    height: 32,
  },
});

export default Heading;