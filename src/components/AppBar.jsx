import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link, useLocation } from "react-router-native";
import theme from "../theme";
// import theme from "../theme.js";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  scroll:{
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 5
  }
});

const AppBarTap = ({ children, to}) =>{
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <Text style={{color: theme.appBar.textSecondary}}>{children}</Text>
    </Link>
  )

}

const AppBar = () => {
  return (
    <View style={styles.container} component={TouchableWithoutFeedback}>
      <ScrollView 
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scroll}>
      <AppBarTap active to={"/"}>Inicio</AppBarTap>
      <AppBarTap active to={"/paises"}>Paises</AppBarTap>
      </ScrollView>
    </View>
  );
};

export default AppBar;
