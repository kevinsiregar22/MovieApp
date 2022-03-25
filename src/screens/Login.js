import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {fakeAPIBaseURL} from '../helpers/apiAccesToken';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const postLogin = async () => {
    try {
      setLoading(true);
      const body = {
        username: username,
        password: password,
      };

      const res = await axios.post(`${fakeAPIBaseURL}/auth/login`, body);

      if (res.status <= 201) {
        props.navigation.navigate('Main');
      } else {
        alert('Username atau password Salah');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'gray'}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>MOVIE</Text>
          <Text style={styles.textHeader1}>APP</Text>
        </View>
        <View style={styles.containerInput}>
          <Input
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Button
            title={'LOGIN'}
            onPress={postLogin}
            buttonStyle={styles.buttonLogin}
            inputStyle={styles.fontButton}

            // onPress={createUser}
          />
        </View>
        <View style={styles.containerAccount}>
          <Text style={styles.textAccount}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.textCreate}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 290, backgroundColor: 'gray'}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    backgroundColor: '#434964',
    borderTopLeftRadius: 15,
    borderTopRighRadius: 15,
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    letterSpacing: 7,
  },

  textHeader: {
    color: '#FFFFFF',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 10,
    borderRadius: 20,
  },
  textHeader1: {
    color: '#FFFFFF',
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: '#765678',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    letterSpacing: 5,
    fontWeight: 'bold',
  },
  containerInput: {
    marginTop: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  textInput: {
    width: 200,
    backgroundColor: '#434354',
    borderRadius: 15,
    fontWeight: 'bold',
    padding: moderateScale(15),
  },
  buttonLogin: {
    width: 200,
    backgroundColor: '#434964',
    borderRadius: 15,
    fontWeight: 'bold',
    padding: moderateScale(20),
    marginTop: moderateScale(20),
  },

  containerAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
  },
  textAccount: {
    color: '#000000',
    fontSize: 14,
  },
  textCreate: {
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: moderateScale(5),
    fontSize: 16,
  },
});
