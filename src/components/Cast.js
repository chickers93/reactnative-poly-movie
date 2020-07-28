import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import common from '../themes/common';
import CreditItem from './List/CreditItem';

export default function Cast({credits}) {
  return (
    <View style={styles.container} Î>
      <Text style={common.heading}>Cast</Text>
      <FlatList
        horizontal
        data={credits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <CreditItem
            name={item.name}
            character={item.character}
            image={item.profile_path}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});
