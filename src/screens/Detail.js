import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

function Detail({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Detail Screen</Text>
      <Text style={styles.textStyle}>
        Name's {navigation.getParam('name')} and the number is{' '}
        {navigation.getParam('phone')}
      </Text>
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

Detail.navigationOptions = () => {
  return {
    headerShown: true,
    // default title is same as the key used for screen in AppNavigator
    // title: 'Detail',
    headerStyle: {
      backgroundColor: 'blueviolet',
    },
    headerTintColor: '#eee',
    headerTitleStyle: {
      fontFamily: 'monospace',
      fontWeight: 'bold',
    },
    headerRight: () => (
      <Button onPress={() => Alert.alert('This is a button!')} title="info" />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Detail;
