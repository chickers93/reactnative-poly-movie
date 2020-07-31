import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './stack/Main';
import DetailMovie from './stack/DetailMovie';
import DetailTV from './stack/DetailTV';
import DetailPeople from './stack/DetailPeople';
import SearchScreen from './stack/SearchScreen';
import ViewAllMovieScreen from './stack/ViewAllMovieScreen';
import ViewAllTVScreen from './stack/ViewAllTVScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

export default function RootStack() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DetailMovie" component={DetailMovie} />
        <Stack.Screen name="DetailTV" component={DetailTV} />
        <Stack.Screen name="DetailPeople" component={DetailPeople} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen
          name="ViewAllMovieScreen"
          component={ViewAllMovieScreen}
        />
        <Stack.Screen name="ViewAllTVScreen" component={ViewAllTVScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
