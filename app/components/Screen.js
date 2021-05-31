import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import colors from "../constants/colors";

function Screen({ bgColor = colors.white, children }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: "100%",
  },
});

export default Screen;
