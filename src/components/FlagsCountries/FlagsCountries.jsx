import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Link } from 'react-router-native'

const FlagsCountries = () => {
  return (
    <View>
      <View>
        <Text>FlagsCountries</Text>
      </View>
      <View component={TouchableWithoutFeedback} >
        <Link to={'/'}>
          <Text style={{fontSize: 20}}>Volver...</Text>
        </Link>
      </View>
    </View>
  )
}

export default FlagsCountries