import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

// axios.get('http://192.168.1.119:5000/user').then(res => {
//   console.log(res.data);
// });

// axios
//   .post('http://192.168.1.4:5000/signup', {
//     // data to be sent
//     name: 'test2',
//     email: 'redjames@gmail.com',
//     password: '12346',
//     driver_id: 'acd1123',
//     contact: '988731321',
//     job: 'driver',
//   })
//   .then(response => {
//     if (response.data.status) {
//       console.log(response);
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });
export default class UserList extends React.Component {
  componentDidMount() {
    var session_url = 'http://192.168.1.119:5000/login';
    var uname = 'test2';
    var pass = '12346';
    axios
      .post(
        session_url,
        {},
        {
          auth: {
            username: uname,
            password: pass,
          },
        },
      )
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <Text>Hello</Text>;
  }
}
