import React, {useState, useEffect} from 'react'
import {View, Text,Button, FlatList,StyleSheet} from 'react-native'
import powiaty from '../src/api/property'


function Second({route, navigation}) {

  const [result, setResult] = useState([]);
  const searchApi = async () =>{
      const response = await powiaty.get(route.params);

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
          title={item.District}
          onPress={() => navigation.navigate("Powiaty", [route.params, item.District])}
        />
      )}
    />
  </View>
    // <View>
    //     <Text onPress={() => navigation.navigate('Home',{id: "hejlo"})}> This is a Second Screen Page</Text>
    //     {result.map((el) => <Button title={el.District} onPress={() => navigation.navigate('Powiaty',el.District)}/>
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