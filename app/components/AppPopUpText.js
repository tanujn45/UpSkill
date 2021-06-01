import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppPopUpText = ({ fontColor = colors.black, children }) => {
  return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontFamily: 'PlusJakartaSans-Bold'
  },
});

export default AppPopUpText;
