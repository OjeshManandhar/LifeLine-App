import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

//package
import axios from 'axios';

//const
import {Ip} from '../const/ip';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(Ip.driver).then(res => {
      setUsers(res.data);
    });
  }, []);

  return (
    <View>
      <Text>Users Page</Text>
      {users ? (
        <FlatList
          data={users}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.name}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
};

export default Users;
