import React, { useEffect, useState } from 'react'
import { FlatList, Text, View} from 'react-native'
import { data } from "../data";
import ItemCountry from './ItemCountry';

const ListCountries = () => {
  const [countries, setCountries]= useState();
  const fetchCountries= async ()=>{
    const api = `https://restcountries.com/v3.1/all`;
    const response = await fetch(api);
    const json = await response.json();
    setCountries(json)
  }
  useEffect(()=>{
    fetchCountries();
  },[])
  console.log(data)
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Lista de Paises</Text>
      </View>
      <View>
        <FlatList
        data={countries}
        ItemSeparatorComponent={()=> <Text> </Text>}
        renderItem={({ item: country})=> <ItemCountry {...country}/>}
        />
      </View>
    </View>
  )
}

export default ListCountries