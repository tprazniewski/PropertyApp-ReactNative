import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home'
import Second from './screens/Second';
import Powiaty from './screens/Powiaty'
import Gmina from './screens/Gmina'
import Miasto from './screens/Miasto'

export default function App() {

  const {Navigator, Screen} = createStackNavigator();
  
  return (
           <NavigationContainer style={styles.container}>
            <Navigator initialRouteName="Home" style={styles}>
              <Screen name='Home' component={Home}/>
              <Screen name='Second' component={Second}/>
              <Screen name='Powiaty' component={Powiaty}/>
              <Screen name='Gmina' component={Gmina}/>
              <Screen name='Miasto' component={Miasto}/>
            </Navigator>
          </NavigationContainer>     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
