import {View, Text} from 'react-native';
import React from 'react';
import Recommended from './Recomended';
import Latest from './Latest';

export default function Index() {
  return (
    <View>
      <Recommended />
      <Latest />
    </View>
  );
}
