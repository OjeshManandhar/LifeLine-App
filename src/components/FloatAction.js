import React from 'react';
import {StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatAction = () => {
  return (
    <ActionButton
      buttonColor="rgba(231,76,60,1)"
      position="right"
      shadowStyle={styles.shadow}>
      <ActionButton.Item
        buttonColor="#ff3a3a"
        title="Obstructions"
        onPress={() => console.log('obstruc tapped!')}>
        <Icon name="ios-construct" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor="#3498db" title="GPS" onPress={() => {}}>
        <Icon name="ios-pin" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#1abc9c"
        title="Navigate"
        onPress={() => {}}>
        <Icon name="md-navigate" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 24,
    height: 26,
    color: 'white',
  },
  shadow: {
    borderRadius: 28,
    elevation: 9,
  },
});

export default FloatAction;
