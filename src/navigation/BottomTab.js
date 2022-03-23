import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
// import Home from '../screens/Home';
// import ListMovie from '../screens/ListMovie';
import Profile from '../screens/Profile';
import DetailMovies from '../screens/DetailMovies';

//icon bottom tab
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Index from '../screens/Home/Index';
// import Recommended from '../screens/Home/Recomended';

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
        name="DetailMovies"
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
