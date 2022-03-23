import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, baseUrl, imageUrl} from '../helpers/apiAccesToken';
import {Button} from 'react-native-elements';

export default function Index(props) {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    getListMovieNowPlaying();
  }, []);

  const getListMovieTopRated = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/top_rated`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      setListMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getListMovieNowPlaying = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/now_playing`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      setListMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getListMoviepopular = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/popular`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      setListMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getListMovieupcoming = async () => {
    try {
      const results = await axios.get(`${baseUrl}/movie/upcoming`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      setListMovies(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const CardMovie = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: `${imageUrl}${item.poster_path}`}}
          style={{
            height: 200,
            borderRadius: 15,
            resizeMode: 'cover',
            margin: 10,
          }}
        />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>List Movie</Text>
      <View>
        <TouchableOpacity onPress={getListMovieNowPlaying}>
          <Text>Now Playing</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={getListMovieupcoming}>
          <Text>upcoming</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={getListMovieTopRated}>
          <Text>TopRated</Text>
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity onPress={getListMovieTopRated}>
        <Text style={{fontSize: 20}}>TopRated</Text>
      </TouchableOpacity>

      <Button
        onPress={getListMoviepopular}
        title="solid"
        style={{padding: 20, fontSize: 22}}></Button>

      <FlatList
        data={listMovies}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </View>
  );
}
