import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {fakeAPIBaseURL} from '../helpers/apiAccesToken';
import axios from 'axios';

export default function Register({navigation}, props) {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        email: 'John@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: {
          firstname: 'John',
          lastname: 'Doe',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      };

      const res = await axios.post(`${fakeAPIBaseURL}/users`, body, {
        validateStatus: status => status < 501,
      });
      // console.log(res);

      if (res.status <= 201) {
        alert('Register Success');
        navigation.navigate('Login');
      } else {
        alert('Error: Gagal register, Coba Lagi');
      }
    } catch (error) {
      console.log(error);
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
            placeholder="username"
            onChangeText={text => setUsername(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Input
            placeholder="firstname"
            onChangeText={text => setFirstname(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Input
            placeholder="lastname"
            onChangeText={text => setLastname(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Input
            placeholder="email"
            onChangeText={text => setEmail(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />
          <Input
            placeholder="phone"
            onChangeText={text => setPhone(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
            keyboardType="phone-pad"
          />
          <Input
            placeholder="password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="lightgray"
            inputStyle={styles.textInput}
          />

          <Button
            title={'REGISTER'}
            onPress={postRegister}
            buttonStyle={styles.buttonRegister}
          />
        </View>

        <View style={{height: 200}}></View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerInput: {
    marginTop: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 150,
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
  textInput: {
    width: 200,
    backgroundColor: '#434354',
    borderRadius: 15,
    fontWeight: 'bold',
    padding: 15,
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonRegister: {
    width: 200,
    backgroundColor: '#434964',
    borderRadius: 15,
    fontWeight: 'bold',
    padding: 20,
    fontSize: 50,
    marginTop: 20,
  },
});
