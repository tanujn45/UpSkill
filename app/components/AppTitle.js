import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppTitle = ({ fontColor = colors.black, children }) => {
  return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 38,
    fontWeight: "700",
  },
});

export default AppTitle;
