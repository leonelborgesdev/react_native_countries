import React from 'react'
import { Text, View } from 'react-native'

const ItemCountry = (props) => {
  return (
    <View><Text>{props.name.common}</Text></View>
  )
}

export default ItemCountry