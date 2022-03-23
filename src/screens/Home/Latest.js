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

export default function Latest({navigation}) {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListMovie();
  }, []);

  const getListMovie = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/upcoming`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });
      console.log(results);
      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const CardMovie = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={{uri: `${imageUrl}${item.poster_path}`}}
          style={{
            height: moderateScale(120),
            width: moderateScale(100),
            borderRadius: 10,
            resizeMode: 'cover',
          }}
        />
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.titleMovie}>{item.title}</Text>
          <Text style={styles.detail}>Released : {item.release_date}</Text>
          <Text style={styles.detail}>Rating : {item.vote_average}</Text>
          <Text style={styles.detail}>genre : {item.vote_average}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailMovie', {id: `${item.id}`})
            }
            style={styles.buttonOpacity}>
            <Text style={styles.opacityText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Latest Upload</Text>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(15),
    color: '#FFFFFF',
  },
  titleMovie: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  detail: {
    fontSize: moderateScale(12),
    color: '#FFFFFF',
  },
  opacityText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    margin: moderateScale(10),
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonOpacity: {
    backgroundColor: '#649DFF',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    marginTop: moderateScale(10),
    width: moderateScale(150),
    borderRadius: 10,
  },
});
