import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

import logo from '../assets/profile.jpg';

const Avatar = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={logo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    padding: 0,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
});

export default Avatar;
