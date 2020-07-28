import React from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import common from '../themes/common';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Header({
  backdrop,
  poster,
  title,
  genres,
  release_date,
  runtime,
  budget,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* backdrop */}
      <View style={{height: 220, position: 'relative'}}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${backdrop}`,
          }}
          style={styles.backdrop}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View
          style={{backgroundColor: 'black', height: 200, opacity: 0.5}}></View>

        <Pressable
          style={{
            position: 'absolute',
            top: 40,
            left: 10,
          }}
          onPress={() => alert('abc')}>
          <View style={common.row}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/ic_back.png')}></Image>
            <Text style={styles.backButton}>Back</Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          height: 140,
        }}>
        <FastImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster}`,
          }}
          style={styles.poster}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={{paddingHorizontal: 10, marginTop: -25}}>
          {/* title */}
          <Text style={common.title}>{title}</Text>
          {/* genres */}
          <Text style={common.subtitle}>{genres}</Text>
          <View style={common.row}>
            {/* release_date */}
            <View style={[common.row, {marginRight: 30}]}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_calendar.png')}></Image>
              <Text style={common.subtitle}>{release_date}</Text>
            </View>

            {/* runtime */}
            <View style={common.row}>
              <Image
                style={styles.icon}
                source={require('../assets/icons/ic_clock.png')}></Image>
              <Text style={common.subtitle}>{runtime}</Text>
            </View>
          </View>

          {/* budget */}
          <View style={common.row}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/ic_money.png')}></Image>
            <Text style={common.subtitle}>{budget}$</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  backdrop: {
    position: 'absolute',
    height: 200,
    width: '100%',
  },
  poster: {
    marginTop: -60,
    height: 170,
    width: width * 0.31,
  },
  backButton: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  icon: {
    marginRight: 5,
    marginTop: Platform.OS === 'ios' ? 0 : 2,
    height: 15,
    width: 15,
  },
});