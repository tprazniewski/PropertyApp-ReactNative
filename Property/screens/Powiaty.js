import React, {useState, useEffect} from 'react'
import {View, Text,Button, FlatList,StyleSheet} from 'react-native'
import gminy from '../src/api/gmina'

function Second({route, navigation}) {
  const [result, setResult] = useState([]);
    
  const searchApi = async () =>{
      console.log(route)
      const response = await gminy.get();

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
          title={item.Municipality}
          onPress={() => navigation.navigate("Gmina", item.Municipality)}
        />
      )}
    />
  </View>

    // <View>
    //     <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is a Third Screen Page</Text>
    //     {result.map((el) => <Button title={el.Municipality} onPress={() => navigation.navigate('Gmina',el.Municipality)}/>
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