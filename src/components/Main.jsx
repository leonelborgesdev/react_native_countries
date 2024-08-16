import React from "react";
import { Text, View } from "react-native";
import { Route, Routes } from "react-router-native";
import Menu from "./Menu";
import AppBar from "./AppBar";
import ListCountries from "./ListCountries";

export default function Main() {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Text> Inicio </Text>} />
        <Route path="/paises" element={<ListCountries />} />
      </Routes>
    </View>
  );
}
