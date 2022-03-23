import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import StackScreen from './src/navigation/StackScreen';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
