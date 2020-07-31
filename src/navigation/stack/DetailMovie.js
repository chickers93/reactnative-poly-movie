import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube';
import axiosConfig from '../../api/axios';
import Cast from '../../components/DetailScreen/Cast';
import Overview from '../../components/DetailScreen/Overview';
import Header from '../../components/Header/HeaderMovie';
import DetailHolder from '../../components/Placeholder/DetailHolder';
import common from '../../themes/common';
import * as helper from '../../utils/helper';

export default function DetailMovie({navigation, route}) {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('-');
  const [runtime, setRuntime] = useState('-');
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const [height, setHeight] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosConfig
      .get(`/movie/${route.params.id}`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setData(response.data);
        setGenres(helper.getGenres(response.data.genres));
        setRuntime(helper.getRuntime(response.data.runtime));
      });

    //getCredits;
    axiosConfig
      .get(`/movie/${route.params.id}/credits`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setCredits(response.data.cast);
        //console.log(response.data.cast);
      });

    //getVideos;
    axiosConfig
      .get(`/movie/${route.params.id}/videos`, {
        params: {
          api_key: 'cfb5e7441170e569be1265dadbb2df82',
        },
      })
      .then((response) => {
        setVideos(helper.getVideoID(response.data.results));
        setLoading(true);
      });
  }, [route.params.id, genres]);

  if (loading) {
    return (
      <View style={{flex: 1}}>
        <Header
          backdrop={data.backdrop_path}
          poster={data.poster_path}
          title={data.title}
          genres={genres}
          release_date={data.release_date}
          runtime={runtime}
          budget={data.budget}
          vote_average={data.vote_average * 10}
          backTo="Main"
        />

        <ScrollView style={{marginBottom: 20}}>
          <Overview overview={data.overview} />
          <Cast credits={credits} />

          <View style={common.container}>
            <Text style={common.heading}>Trailers</Text>
            <YouTube
              apiKey="AIzaSyAR4ca3a6Xoxfn4gIO9M9Exv6o4zqCVlIQ"
              videoIds={videos}
              play
              style={[styles.youtube, {height: height}]}
              onReady={() => {
                setHeight(221);
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <DetailHolder />;
  }
}

const styles = StyleSheet.create({
  youtube: {
    alignSelf: 'stretch',
  },
});
