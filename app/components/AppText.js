import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const AppText = (props) => {
  return (
    <Text style={[styles.text, { color: props.fontColor }]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.secondary,
  },
});
export default AppText;
