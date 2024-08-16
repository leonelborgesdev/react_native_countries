import React from 'react'
import { Image, Text, View } from 'react-native'

const ItemCountry = (props) => {
  return (
    <View>
      <View style={{paddingRight: 10}}>
        <Image source={{ uri: props.flags.png}}/>
      </View>
      <View>
        <Text>Nombre: {props.name.common}</Text>
        <Text>Capital: {props.capital}</Text>
        <Text>Continente: {props.region}</Text>
        <Text>Poblacion: {props.population}</Text>
        <Text>Area: {props.area} Km2</Text></View>
    </View>
  )
}

export default ItemCountry