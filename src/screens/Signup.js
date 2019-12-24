import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Form from '../components/Form';

let scrollXPos = 0;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export default class Signup extends Component {
  state = {
    count: 1,
    data: [
      {
        id: 1,
        text1: 'Lets get started...',
        placeholder: 'User Name',
        text2: 'name.',
      },
      {
        id: 2,
        text1: 'Great, We need a few more information.',
        placeholder: 'Driver ID',
        text2: 'driver ID.',
      },
      {
        id: 3,
        text1: 'Great, We need a few more information.',
        placeholder: 'abc@mail.com',
        text2: 'email.',
      },
      {
        id: 4,
        text1: 'Almost there ...',
        placeholder: '98********',
        text2: 'contact.',
      },
      {
        id: 5,
        text1: 'Now, for the final step!!',
        placeholder: 'Password',
        text2: 'password.',
      },
    ],
  };

  scrollTo = () => {
    if (this.state.count < 5) {
      scrollXPos = Width * this.state.count;
      this.scroller.scrollTo({x: scrollXPos, y: 0});
      this.setState({count: this.state.count + 1});
    } else {
      this.scroller.scrollTo({x: 0, y: 0});
      this.setState({count: 1});
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Image
              style={styles.icon}
              source={require('../assets/back_icon.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create an Account</Text>
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          style={styles.container}
          ref={scroller => {
            this.scroller = scroller;
          }}>
          {this.state.data.map(c => (
            <Form
              key={c.id}
              id={c.id}
              title={c.text1}
              placeholder={c.placeholder}
              text2={c.text2}
              scroll={this.scrollTo}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Height,
  },
  page: {
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    //justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '13%',
    flexDirection: 'row',
    backgroundColor: '#F53D3D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
