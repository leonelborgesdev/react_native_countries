import React from "react";
import { Text, View } from "react-native";
import ListCountries from "./ListCountries";

export default function Menu() {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Bienvenido a AppCountries</Text>
      </View>
    <View >
      <Text style={{fontSize: 20}}>Banderas y Paises</Text>
    </View>
    <View >
      <Text style={{fontSize: 20}}>Paises y Capitales</Text>
    </View>
    <View >
      <Text style={{fontSize: 20}}>Paises y Continentes</Text>
    </View>
    </View>
  );
}
