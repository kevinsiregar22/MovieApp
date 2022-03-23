import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';

export default function Login(props) {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          marginTop: 70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Input
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          placeholderTextColor="lightgray"
          inputStyle={{
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 1,
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            padding: 15,
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="lightgray"
          inputStyle={{
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderColor: 'black',
            borderWidth: 1,
            padding: 15,
          }}
        />
        <Button
          title={'LOGIN'}
          buttonStyle={{
            width: 200,
            backgroundColor: 'black',
            borderRadius: 15,
            fontWeight: 'bold',
            padding: 20,
          }}
          // onPress={createUser}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <Text style={{color: 'black'}}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={{fontWeight: 'bold', color: 'black', paddingLeft: 5}}>
            Create account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
