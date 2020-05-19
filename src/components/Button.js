import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({title, onPress, disable}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disable}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3A3A',
    borderWidth: 2,
    borderRadius: 11,
    borderColor: '#FF3A3A',
  },
  textStyle: {
    fontSize: 15,
    color: '#fff',
  },
});

export default Button;
