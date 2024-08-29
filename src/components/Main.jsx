import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Menu from "./Menu";
import AppBar from "./AppBar";
import ListCountries from "./ListCountries";
import FlagsCountries from "./FlagsCountries/FlagsCountries";

export default function Main() {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/paises" element={<ListCountries />} />
        <Route path="/flagscountries" element={<FlagsCountries />} />
      </Routes>
    </View>
  );
}
