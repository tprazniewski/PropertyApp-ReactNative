import React, {useState, useEffect} from 'react'
import {View, Text,Button, FlatList,StyleSheet} from 'react-native'
import miasto from '../src/api/property'


function Second({route, navigation}) {

  const [result, setResult] = useState([]);
    
  const searchApi = async () =>{
      const response = await miasto.get(`${route.params[0]}/${route.params[1]}/${route.params[2]}`);
      setResult(response.data);
  }


  useEffect(() => {
    searchApi()
  },[])

  return (

    <View>
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contactList}
      data={result}
      // data={user}
      renderItem={( {item} ) => (
        <Button
          title={item.City}
          onPress={() => navigation.navigate("Adds", [route.params[0],route.params[1],route.params[2],item.City])}
        />
      )}
    />
  </View>

    // <View>
    //     <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is a Third Screen Page</Text>
    //     {result.map((el) => <Button title={el.City} onPress={() => navigation.navigate('Miasto',el.District)}/>
    //     // {result.map((el) => <Text onPress={searchApi} style={styles.text}> We have results: {el.County}</Text>
    //     )}
    // </View> 
     )
}

export default Second
const styles = StyleSheet.create({
  text: {
      color: `#7fff00`
  },
});