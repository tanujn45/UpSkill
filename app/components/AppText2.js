import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppText2 = ({ children, fontColor = colors.white }) => {
  return <Text style={[styles.text, { color: fontColor }]}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: 15,
  },
});
export default AppText2;
