import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import County from './screens/County'
import District from './screens/District';
import Municipality from './screens/Municipality'
import City from './screens/City'
import Adds from './screens/Adds'

export default function App() {

  const {Navigator, Screen} = createStackNavigator();
  
  return (
           <NavigationContainer style={styles.container}>
            <Navigator initialRouteName="County" style={styles}>
              <Screen name='County' component={County}/>
              <Screen name='District' component={District}/>
              <Screen name='Municipality' component={Municipality}/>
              <Screen name='City' component={City}/>
              <Screen name='Adds' component={Adds}/>
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
