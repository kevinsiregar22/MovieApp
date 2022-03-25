import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Login from '../screens/Login';
import Register from '../screens/Register';
import BottomTab from './BottomTab';

import DetailMovies from '../screens/DetailMovies';

const Stack = createStackNavigator();

export default function StackScreen(props) {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="DetailMovie" component={DetailMovies}></Stack.Screen>
      <Stack.Screen name="Main" component={BottomTab}></Stack.Screen>
    </Stack.Navigator>
  );
}
