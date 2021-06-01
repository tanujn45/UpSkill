import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppTitle2 = ({ fontColor = colors.black, children }) => {
  return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'PlusJakartaSans-Medium'
  },
});

export default AppTitle2;