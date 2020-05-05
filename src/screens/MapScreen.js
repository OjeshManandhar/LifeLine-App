import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Map from '../components/Map';

function MapScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Map userInfo={navigation.getParam('userInfo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MapScreen;
