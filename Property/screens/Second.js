import React from 'react'
import {View, Text} from 'react-native'

function Second({navigation}) {
  return (
    <View>
        <Text onPress={() => navigation.navigate('Home',{id: "hejlo"})}> This is a Second Screen Page</Text>
    </View>  )
}

export default Second