import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

// axios
//   .post('http://192.168.1.16:5000/product', {
//     // data to be sent
//     name: 'gwanch',
//     email: 'redjames@gmail.com',
//     password: '12346',
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
  state = {
    datas: [],
  };

  componentDidMount() {
    axios.get('http://192.168.1.16:5000/product').then(res => {
      this.setState({datas: res.data});
      console.log(this.state.datas);
    });
  }
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
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}
