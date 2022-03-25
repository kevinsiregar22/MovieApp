import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MovieID} from '../helpers/apiAccesToken';
import {moderateScale} from 'react-native-size-matters';

export default function DetailMovies({navigation, route}) {
  useEffect(() => {
    getSingleMovie();
  }, []);
  const [movie, setMovie] = useState({});
  const getSingleMovie = async () => {
    try {
      const results = await axios.get(`${MovieID}/${route.params.id}`);
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
        }}></View>
    );
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          padding: moderateScale(10),
        }}>
        <Image
          source={{uri: `${movie.poster_path}`}}
          style={styles.posterSize}
        />
      </View>
      <View style={styles.posterSize}>
        <View style={styles.cartView}>
          <View style={styles.itemPosterCart}>
            <Image
              source={{uri: `${movie.poster_path}`}}
              style={styles.posterSize1}
            />
          </View>
          <View>
            <Text style={styles.itemTextCart}>Title : '{movie.title}</Text>
            <Text style={styles.itemTextCart}>
              Release : '{movie.release_date}
            </Text>
            <Text style={styles.itemTextCart}>
              Rating : '{movie.vote_average}
            </Text>
            <Text style={styles.itemTextCart}>
              judul : '{movie.runtime} menit
            </Text>
            <Text style={styles.itemTextCart}>tagline : {movie.tagline}</Text>
            <Text style={styles.itemTextCart}>Status : {movie.status}</Text>
          </View>
        </View>
        <View style={styles.cartViewSinopsis}>
          <Text style={styles.titleItem}>Synopshis</Text>
          <Text style={styles.textSinopsis}>{movie.overview}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  posterSize: {
    height: moderateScale(250),
    borderRadius: 10,
    flex: 1,
  },
  posterSize1: {
    // height: moderateScale(50),
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cartView: {
    height: moderateScale(160),
    width: moderateScale(350),
    borderRadius: 15,
    marginTop: moderateScale(-90),
    backgroundColor: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemPosterCart: {
    height: 160,
    borderRadius: 10,
    width: 100,
    marginLeft: -85,
    margin: 10,
    justifyContent: 'center',

    flexDirection: 'row',
  },
  itemTextCart: {
    color: '#000000',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  cartViewSinopsis: {
    height: moderateScale(200),
    width: moderateScale(350),
    paddingTop: 20,
    borderRadius: 15,
    alignSelf: 'center',
  },
  titleItem: {fontSize: 16, fontWeight: 'bold'},
});
