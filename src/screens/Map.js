import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

//package
import axios from 'axios';

//const
import {Ip} from '../const';

const Map = () => {
  // const [email, setEmail] = useState('');
  const [name, setName] = useState([]);
  // const [contact, setContact] = useState('');
  // const [driver_id, setDriverId] = useState('');

  function users() {
    axios.get(Ip.driver).then(res => {
      const nameList = [];
      res.data.map(c => {
        nameList.push(c.name);
      });
      setName(nameList);
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
