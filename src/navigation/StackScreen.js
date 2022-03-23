import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Login from '../screens/Login';
import Register from '../screens/Register';
//import Movie from '../screens/Movie';
import BottomTab from './BottomTab';
// import Movies from '../screens/Movies';
//import ListMovie from '../screens/ListMovie';

// import Moviess from '../screens/Moviess';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      {/* <Stack.Screen name="Movie" component={Movie}></Stack.Screen> */}
      {/* <Stack.Screen name="ListMovie" component={ListMovie}></Stack.Screen> */}
      {/* <Stack.Screen name="Moviess" component={Moviess}></Stack.Screen> */}
      <Stack.Screen name="Main" component={BottomTab}></Stack.Screen>
    </Stack.Navigator>
  );
}
