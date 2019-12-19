import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

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
