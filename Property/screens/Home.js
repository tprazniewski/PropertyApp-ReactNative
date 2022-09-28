import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import property from '../src/api/property'


function Home({navigation}) {
    const [result, setResult] = useState([]);

    const searchApi = async () =>{
        const response = await property.get();
        console.log(response.data.length)
        setResult(response.data);
    }


  return (
    <View>
        <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is The Home  Page</Text>
        <Text onPress={searchApi}> Clickable </Text>
        <Text onPress={searchApi} style={styles.text}> We have results: {result.length}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color: `#7fff00`
    },
  });
  