import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import Index from '../screens/Home/Index';
import DetailMovies from '../screens/DetailMovies';
import Profile from '../screens/Profile';

//icon bottom tab
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Index}
        options={{
          tabBarIcon: () => <Feather name="home" color="red" size={25} />,
        }}></Tab.Screen>

      <Tab.Screen
        name="DetailMovie"
        component={DetailMovies}
        options={{
          tabBarIcon: () => <Feather name="layers" size={25} color="red" />,
        }}></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={25} color="red" />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}
