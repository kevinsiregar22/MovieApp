import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {AllMovie, baseUrl} from '../helpers/apiAccesToken';

export default function DetailMovie({navigation, route}) {
  useEffect(() => {
    getSingleMovie();
  }, []);
  const [movie, setMovie] = useState({});
  const getSingleMovie = async () => {
    try {
      const results = await axios.get(`${AllMovie}/${route.params.id}`);
      console.log(results);
      setMovie(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  const DetailMovie = ({item}) => {
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
  return (
    <View>
      <Text>{movie.backdrop_path}</Text>
    </View>
  );
}
