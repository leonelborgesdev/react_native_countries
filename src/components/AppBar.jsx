import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
// import theme from "../theme.js";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: "center",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>Countries</Text>
    </View>
  );
};

export default AppBar;
