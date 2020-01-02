import React, { useState } from 'react';
import { Text } from 'react-native';

function Map(props) {
  console.log('props:', props);

  return (
    <Text>
      This is {props.userName} and the phone number is {props.phone}
    </Text>
  );
}

export default Map;
