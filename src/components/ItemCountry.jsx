import React from 'react'
import { Text, View } from 'react-native'

const ItemCountry = (props) => {
  return (
    <View>
        <Text>Nombre: {props.name.common}</Text>
        <Text>Capital: {props.capital}</Text>
        <Text>Continente: {props.region}</Text>
        <Text>Poblacion: {props.population}</Text>
        <Text>Area: {props.area} Km2</Text>
    </View>
  )
}

export default ItemCountry