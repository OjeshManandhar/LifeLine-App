import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

const Map = () => {
  // const [email, setEmail] = useState('');
  const [name, setName] = useState([]);
  // const [contact, setContact] = useState('');
  // const [driver_id, setDriverId] = useState('');

  function users() {
    axios.get('http://192.168.0.3:5000/driver').then(res => {
      res.data.map(c => {
        setName([...name, c.name]);
      });
    });
  }

  console.log(name);

  return (
    <View>
      <Text>Map Page</Text>
      <Button title="Show Users" onPress={() => users()} />
      <Text>name : {name}</Text>
    </View>
  );
};

export default Map;
