import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, baseUrl, imageUrl} from '../helpers/apiAccesToken';
export default function Index(props) {
  const [listMovies, setListMovies] = useState([]);

  const getListMovies = async endpoint => {
    try {
      const results = await axios.get(`${baseUrl}/movie/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      setListMovies(results.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const CardMovie = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: `${imageUrl}${item.poster_path}`}}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <Text style={{textAlign: 'center'}}>{item.title}</Text>
      </View>
    );
  };

  useEffect(() => {
    getListMovies('popular');
  }, []);

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        List Movies
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            getListMovies('popular');
          }}>
          <Text>Most Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            getListMovies('top_rated');
          }}>
          <Text>Top Rated</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={listMovies}
          keyExtractor={(item, index) => index}
          renderItem={CardMovie}
        />
      </View>
    </View>
  );
}
