import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

// const API = 'http://192.168.1.125:5000/login';
// fetch(API, {
//   method: 'GET',
// })
//   .then(res => {
//     res.json();
//   })
//   .then(data => {
//     console.log(data);
//   });

// axios
//   .get('http://192.168.1.125:5000/login', {
//     auth: {name: 'test2', password: 'major2'},
//   })
//   .then(res => {
//     console.log(res.data);
//   });

// axios
//   .post('http://192.168.1.125:5000/signup', {
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

async function getData() {
  await axios
    .get('https://example.com', {
      auth: {
        user: 'username',
        password: 'password',
      },
    })
    .then(res => {
      console.log(res.data.status);
    });
}

export default class UserList extends React.Component {
  state = {
    datas: [],
  };

  // componentDidMount() {
  //   axios.get('http://192.168.1.125:5000/user').then(res => {
  //     this.setState({datas: res.data});
  //     console.log(this.state.datas);
  //   });
  // }
  // handleRetrive = () => {
  //   const {datas} = this.state;
  //   return (
  //     for(var i =0; i < datas.length; i++) {
  //       <View>
  //       </View>
  //     }
  //   );
  // };
  render() {
    console.log(getData());
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}
