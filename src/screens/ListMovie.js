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
import {AllMovie} from '../helpers/apiAccesToken';
import {useState, useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function Home({navigation}) {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListMovie();
  }, []);

  const getListMovie = async () => {
    try {
      const results = await axios.get(`${AllMovie}`);
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
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginHorizontal: 10,
        }}>
        <Image
          source={{uri: `${item.poster_path}`}}
          style={{
            height: moderateScale(150),
            width: moderateScale(150),
            borderRadius: 5,
            flex: 1,
          }}
        />
        <View style={{marginStart: 10, flex: 1}}>
          <Text style={styles.titlemov}>{item.title}</Text>
          <Text style={styles.detail}>Released : {item.release_date}</Text>
          <Text style={styles.detail}>Rating : {item.vote_average}</Text>
          {/* <Text style={styles.detail}>genre_ids : {item.overview}</Text> */}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DetailMovie', {id: `${item.id}`})
            }
            style={styles.buttonStyle}>
            <Text style={styles.textShow}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PosterMovie = ({item}) => {
    return (
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginVertical: 10,
          marginHorizontal: 5,
        }}>
        <Image
          source={{uri: `${item.poster_path}`}}
          style={{
            height: moderateScale(150),
            width: moderateScale(100),
            borderRadius: 20,
            flex: 1,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.title}>Recommended Movies</Text>
      <FlatList
        data={listMovie}
        keyExtractor={(item, index) => index}
        renderItem={PosterMovie}
        horizontal={true}
      />
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
  textShow: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    margin: moderateScale(10),
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#649DFF',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    marginTop: moderateScale(10),
    width: moderateScale(150),
    borderRadius: 10,
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(15),
    color: 'black',
  },
  titlemov: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: 'black',
  },
  detail: {
    fontSize: moderateScale(12),
    marginTop: moderateScale(10),
    color: 'black',
  },
});
