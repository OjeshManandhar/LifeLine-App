import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

// package
import axios from 'axios';
import ViewPager from '@react-native-community/viewpager';

//const
import {Ip} from '../const';

// conponent
import Form from '../components/Form';

let scrollXPos = 0;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [driver_id, setDriverId] = useState('');

  const data = [
    {
      id: 1,
      setState: setName,
      value: name,
      text1: 'Lets get started...',
      placeholder: 'User Name',
      text2: 'name.',
      submit: false,
    },
    {
      id: 2,
      value: driver_id,
      setState: setDriverId,
      text1: 'Great, We need a few more information.',
      placeholder: 'Driver ID',
      text2: 'driver ID.',
      submit: false,
    },
    {
      id: 3,
      value: email,
      setState: setEmail,
      text1: 'Great, We need a few more information.',
      placeholder: 'abc@mail.com',
      text2: 'email.',
      submit: false,
    },
    {
      id: 4,
      value: contact,
      setState: setContact,
      text1: 'Almost there ...',
      placeholder: '98********',
      text2: 'contact.',
      submit: false,
    },
    {
      id: 5,
      value: password,
      setState: setPassword,
      text1: 'Now, for the final step!!',
      placeholder: 'Password',
      text2: 'password.',
      submit: true,
      onSubmit: onSubmit,
    },
  ];

  const inputRef = useRef();

  function onSubmit() {
    axios
      .post(Ip.driver_signup, {
        // data to be sent
        name: name,
        email: email,
        password: password,
        driver_id: driver_id,
        contact: contact,
      })
      .then(response => {
        if (response.data.status) {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const scroller = useRef(0);

  // const scroll = () => {
  //   if (state.count < 5) {
  //     scrollXPos = Width * state.count;
  //     scroller.current.scrollTo({x: scrollXPos, y: 0});
  //     setState({count: state.count + 1});
  //   } else {
  //     scroller.current.scrollTo({x: 0, y: 0});
  //     setState({count: 1});
  //   }
  // };

  const handleScroll = e => {
    if (scroller.current < 5) {
      scroller.current++;
    } else {
      scroller.current = 0;
    }
    console.log(e.nativeEvent);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('login', {name: 'login'})}>
          <Image
            style={styles.icon}
            source={require('../assets/back_icon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create an Account</Text>
      </View>
      <ViewPager
        ref={inputRef}
        style={styles.container}
        initialPage={0}
        showPageIndicator={true}
        scrollEnabled={true}
        orientation="horizontal">
        {data.map(c => (
          <View key={c.id}>
            <Form
              key={c.id}
              id={c.id}
              title={c.text1}
              text2={c.text2}
              placeholder={c.placeholder}
              value={c.value}
              setState={c.setState}
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
