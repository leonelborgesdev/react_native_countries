import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ItemCountry = (props) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2}}>
      <View style={{paddingRight: 10}}>
        <Image style={styles.image} source={{ uri: props.flags.png}}/>
      </View>
      <View>
        <Text>Nombre: {props.name.common}</Text>
        <Text>Capital: {props.capital}</Text>
        <Text>Continente: {props.region}</Text>
        <Text>Poblacion: {props.population}</Text>
        <Text>Area: {props.area} Km2</Text>
        </View>
    </View>
  )
}

const styles= StyleSheet.create({
  image: {
    width: 180,
    height: 120
  }
})

export default ItemCountry