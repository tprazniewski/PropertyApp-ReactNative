import React, {useState, useEffect} from 'react'
import {View, Text,Button, FlatList,StyleSheet} from 'react-native'
import ogloszenia from '../src/api/property'


function Second({route, navigation}) {

  const [result, setResult] = useState([]);
    
  const searchApi = async () =>{
      const response = await ogloszenia.get(`${route.params[0]}/${route.params[1]}/${route.params[2]}/${route.params[3]}`);
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
          title={item.Title}
          onPress={() => navigation.navigate("Home", item.Title)}
        />
      )}
    />
  </View>

    // <View>
    //     <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is a Third Screen Page</Text>
    //     {result.map((el) => <Button title={el.Title} onPress={() => navigation.navigate('Miasto',el.Title)}/>
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