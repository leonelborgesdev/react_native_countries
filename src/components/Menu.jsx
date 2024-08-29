import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import ListCountries from "./ListCountries";

const styles= StyleSheet.create({
  buttonFlags: {
    backgroundColor: 'cyan',
    width: 150,
    alignItems: 'center',
    height: 50
  },
  buttonCountries:{
    backgroundColor: 'red',
    width: 150,
    alignItems: 'center',
    height: 50
  }
})

export default function Menu() {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Bienvenido a AppCountries</Text>
      </View>
    <View component={TouchableWithoutFeedback} style={styles.buttonFlags}>
      <Text style={{fontSize: 20}}>Banderas y Paises</Text>
    </View>
    <View component={TouchableWithoutFeedback} style={styles.buttonCountries}>
      <Text style={{fontSize: 20}}>Paises y Capitales</Text>
    </View>
    <View component={TouchableWithoutFeedback} style={styles.buttonRegion}>
      <Text style={{fontSize: 20}}>Paises y Continentes</Text>
    </View>
    </View>
  );
}
