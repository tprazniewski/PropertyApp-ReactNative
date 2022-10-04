import React, {useState, useEffect} from 'react'
import {View, Text,Button} from 'react-native'
import ogloszenia from '../src/api/ogloszenia'


function Second({route, navigation}) {

  const [result, setResult] = useState([]);
    
  const searchApi = async () =>{
      const response = await ogloszenia.get();
      console.log(response.data)
      setResult(response.data);
  }


  useEffect(() => {
    searchApi()
  },[])

  console.log(route.params)
  return (
    <View>
        <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is a Third Screen Page</Text>
        {result.map((el) => <Button title={el.Title} onPress={() => navigation.navigate('Miasto',el.Title)}/>
        // {result.map((el) => <Text onPress={searchApi} style={styles.text}> We have results: {el.County}</Text>
        )}
    </View>  )
}

export default Second