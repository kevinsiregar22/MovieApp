import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import {baseUrl, ACCESS_TOKEN, imageUrl} from '../../helpers/apiAccesToken';
import {useState, useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function Recommended({navigation}) {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListMovie();
  }, []);

  const getListMovie = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/popular`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      console.log(results, 'results');
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const cartMovie = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          flex: 1,
        }}>
        <Image
          source={{uri: `${imageUrl}${item.poster_path}`}}
          style={{
            height: moderateScale(180),
            width: moderateScale(120),
            borderRadius: 10,
            resizeMode: 'cover',
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.backgroud}>
      <Text style={styles.title}>Recommended</Text>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={cartMovie}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    marginTop: moderateScale(15),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backgroud: {
    backgroundColor: 'gray',
  },
});
