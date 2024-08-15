import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { data } from "../data";
import ItemCountry from './ItemCountry';

const ListCountries = () => {
  console.log(data)
  return (
    <FlatList
    data={data}
    ItemSeparatorComponent={()=> <Text> </Text>}
    renderItem={({ item: country})=> <ItemCountry {...country}/>}
    />
  )
}

export default ListCountries