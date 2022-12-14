import React, {useState, useEffect} from 'react'
import {View, Text,Button} from 'react-native'
import miasto from '../src/api/property'


function Second({route, navigation}) {

  const [result, setResult] = useState([]);
    
  const searchApi = async () =>{
      const response = await gminy.get();
      setResult(response.data);
  }


  useEffect(() => {
    searchApi()
  },[])

  return (
    <View>
        <Text onPress={() => navigation.navigate('Second',{id: "hejlo"})}> This is a Third Screen Page</Text>
        {result.map((el) => <Button title={el.Municipality} onPress={() => navigation.navigate('Miasto',el.District)}/>
        // {result.map((el) => <Text onPress={searchApi} style={styles.text}> We have results: {el.County}</Text>
        )}
    </View>  )
}

export default Second