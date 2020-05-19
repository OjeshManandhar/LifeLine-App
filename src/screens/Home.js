import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Home({navigation}) {
  const contact = navigation.getParam('userContact');

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate('Detail', {
            name: 'DeadSkull',
            phone: '1234567890',
          })
        }
      />
      <Button
        title="Go to Map"
        onPress={() =>
          navigation.navigate('Map', {
            contact: {contact},
          })
        }
      />
    </View>
  );
}

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

export default Home;
