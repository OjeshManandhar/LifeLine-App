import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Form from '../components/Form';
import { Actions } from 'react-native-router-flux';

// let scrollXPos = 0;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

const Signup = props => {
  const [state, setState] = useState({
    count: 0,
    data: [
      {
        id: 1,
        text1: 'Lets get started...',
        placeholder: 'User Name',
        text2: 'name.'
      },
      {
        id: 2,
        text1: 'Great, We need a few more information.',
        placeholder: 'Driver ID',
        text2: 'driver ID.'
      },
      {
        id: 3,
        text1: 'Great, We need a few more information.',
        placeholder: 'abc@mail.com',
        text2: 'email.'
      },
      {
        id: 4,
        text1: 'Almost there ...',
        placeholder: '98********',
        text2: 'contact.'
      },
      {
        id: 5,
        text1: 'Now, for the final step!!',
        placeholder: 'Password',
        text2: 'password.'
      }
    ]
  });
  // const scroller = useRef(null);

  // const scroll = () => {
  //   if (state.count < 5) {
  //     scrollXPos = Width * state.count;
  //     scroller.scrollTo({x: scrollXPos, y: 0});
  //     setState({count: state.count + 1});
  //   } else {
  //     scroller.scrollTo({x: 0, y: 0});
  //     setState({count: 1});
  //   }
  // };

  const handleScroll = () => {
    setState({ count: state.count + 1 });
    if (state.count === 5) {
      setState({ count: 0 });
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity onPress={Actions.login}>
          <Image
            style={styles.icon}
            source={require('../assets/back_icon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create an Account</Text>
      </View>
      <ViewPager style={styles.container} initialPage={state.count}>
        {state.data.map((c, index) => (
          <View key={c.id}>
            <Form
              key={c.id}
              id={c.id}
              title={c.text1}
              placeholder={c.placeholder}
              text2={c.text2}
              scroll={handleScroll}
              // scroll={scroll}
            />
          </View>
        ))}
      </ViewPager>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Height
  },
  page: {
    flexDirection: 'column',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
    //justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '13%',
    flexDirection: 'row',
    backgroundColor: '#F53D3D',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20
  },
  icon: {
    height: 30,
    width: 30
  }
});
