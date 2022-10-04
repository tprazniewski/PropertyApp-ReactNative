import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Button,FlatList} from 'react-native'
import property from '../src/api/property'


function Home({navigation}) {
    const [result, setResult] = useState([]);
    
    const searchApi = async () =>{
        const response = await property.get();
        console.log(response.data)
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
            title={item.County}
            onPress={() => navigation.navigate("Second", item.County)}
          />
        )}
      />
    </View>


    // <View>
    //     <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is The Home  Page</Text>
    //     <Text onPress={searchApi}> Clickable To get all the  County Names</Text>
    //     <Text onPress={searchApi} style={styles.text}> We have results: {result.length}</Text>
    //     {result.map((el) => <Button title={el.County} onPress={() => navigation.navigate('Second',el.County)}/>
    //     // {result.map((el) => <Text onPress={searchApi} style={styles.text}> We have results: {el.County}</Text>
    //     )}

          
    // </View>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color: `#7fff00`
    },
  });
  