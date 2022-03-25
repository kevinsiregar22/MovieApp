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
export default function Latest({navigation, props, route}) {
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
          padding: moderateScale(10),
        }}>
        <Image
          source={{uri: `${imageUrl}${item.poster_path}`}}
          style={{
            height: moderateScale(200),
            width: moderateScale(150),
            borderRadius: 10,
            resizeMode: 'cover',
          }}
        />
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.titleMovie}>{item.title}</Text>
          <Text style={styles.detailItem}>Released : {item.release_date}</Text>
          <Text style={styles.detailItem}>Rating : {item.vote_average}</Text>
          <Text style={styles.detailItem}>
            language : {item.original_language}
          </Text>
          <Text style={styles.detailItem}>vote count : {item.vote_count}</Text>

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
      <Text style={styles.titleFirst}>Latest Upload</Text>
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
  titleFirst: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(10),
    marginLeft: moderateScale(15),
    color: '#FFFFFF',
  },
  titleMovie: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
    paddingBottom: moderateScale(10),
  },
  detailItem: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    flex: 1,
    marginTop: moderateScale(-20),
  },
  opacityText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 20,
  },
  buttonOpacity: {
    backgroundColor: '#154c79',
    borderRadius: 15,
    flex: 1,
  },
});
