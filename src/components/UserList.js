import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

var session_url = 'http://127.0.0.1:5000/signup';
axios
  .post(
    session_url,
    {
      name: 'test2',
      email: 'test2@gmail.com',
      job: 'driver',
      driver_id: '0AE376Z2',
      contact: 9808998164,
      password: 'major2',
    },
    // {
    //   auth: {
    //     name: uname,
    //     password: pass,
    //   },
    // },
  )
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

// axios
//   .post('http://127.0.0.1:5000/signup', {
//     // data to be sent
//     name: 'test2',
//     email: 'test2@gmail.com',
//     job: 'driver',
//     driver_id: '0AE376Z2',
//     contact: 9808998164,
//     password: 'major2',
//   })
//   .then(response => {
//     if (response.data.status) {
//       console.log(response);
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });

// axios.get('http://127.0.0.1:5000/user').then(response => {
//   console.log(response.data);
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.headers);
//   console.log(response.config);
// });

export default class UserList extends React.Component {
  // state = {
  //   datas: [],
  // };
  // componentDidMount() {
  //   axios.get('http://127.0.0.1:5000/user').then(res => {
  //     console.log(res);
  //     this.setState({datas: res.data});
  //   });
  // }

  render() {
    return <Text>Hello</Text>;
  }
}
