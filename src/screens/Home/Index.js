import {View, Text} from 'react-native';
import React from 'react';
//screens
import Recommended from '../Home/Recomended';
import Latest from '../Home/Latest';

export default function Index({navigation}) {
  return (
    <View>
      <Recommended />
      <Latest navigation={navigation} />
    </View>
  );
}
