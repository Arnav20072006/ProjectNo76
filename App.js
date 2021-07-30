import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap';
import SpaceCrafts from './screens/SpaceCrafts';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "DailyPic" screenOptions = {{headerShown : false}}>
       <Stack.Screen name = "DailyPic" component = {DailyPic}/>
       <Stack.Screen name = "StarMap" component = {StarMap}/>
       <Stack.Screen name = "SpaceCrafts" component = {SpaceCrafts}/>
       </Stack.Navigator>
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
