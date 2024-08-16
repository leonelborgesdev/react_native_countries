import React, { useEffect, useState } from 'react'
import { FlatList, Text} from 'react-native'
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
    console.log("objCountries",countries)
  },[])
  console.log(data)
  return (
    <FlatList
    data={countries}
    ItemSeparatorComponent={()=> <Text> </Text>}
    renderItem={({ item: country})=> <ItemCountry {...country}/>}
    />
  )
}

export default ListCountries