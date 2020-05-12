import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

//package
import axios from 'axios';

//const
import {Ip} from '../const/ip';

const Map = () => {
  const [name, setName] = useState([]);

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
