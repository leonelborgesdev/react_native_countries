import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Menu from "./Menu";

export default function Main() {
  return (
    // Constants te permite ponerle un margen superior al texto de forma que
    // se ajuste al renderizar la vista en android o iOS
    <View style={{ flexGrow: 1 }}>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </View>
  );
}
