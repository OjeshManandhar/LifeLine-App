import React from 'react';
import { View, StyleSheet } from 'react-native';

const Pagination = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          props.id === 1 ? styles.circleR : styles.circleG
        ]}
      />
      <View
        style={[
          styles.circle,
          props.id === 2 ? styles.circleR : styles.circleG
        ]}
      />
      <View
        style={[
          styles.circle,
          props.id === 3 ? styles.circleR : styles.circleG
        ]}
      />
      <View
        style={[
          styles.circle,
          props.id === 4 ? styles.circleR : styles.circleG
        ]}
      />
      <View
        style={[
          styles.circle,
          props.id === 5 ? styles.circleR : styles.circleG
        ]}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    margin: 18,
    marginTop: 40
  },
  circleG: {
    backgroundColor: 'grey'
  },
  circleR: {
    width: 25,
    backgroundColor: 'red'
  }
});
