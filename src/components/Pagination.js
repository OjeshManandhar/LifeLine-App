import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Pagination extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.circle,
            this.props.id === 1 ? styles.circleR : styles.circleG,
          ]}
        />
        <View
          style={[
            styles.circle,
            this.props.id === 2 ? styles.circleR : styles.circleG,
          ]}
        />
        <View
          style={[
            styles.circle,
            this.props.id === 3 ? styles.circleR : styles.circleG,
          ]}
        />
        <View
          style={[
            styles.circle,
            this.props.id === 4 ? styles.circleR : styles.circleG,
          ]}
        />
        <View
          style={[
            styles.circle,
            this.props.id === 5 ? styles.circleR : styles.circleG,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginLeft: 20,
    marginTop: 40,
  },
  circleG: {
    backgroundColor: 'grey',
  },
  circleR: {
    width: 25,
    backgroundColor: 'red',
  },
});
