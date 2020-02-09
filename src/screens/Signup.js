import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Forms from '../components/Form';

let scrollXPos = 0;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

const Signup = ({navigation}) => {
  const [state, setState] = useState({
    count: 0,
    datas: [
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
  });
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
        style={styles.container}
        initialPage={0}
        showPageIndicator={true}
        scrollEnabled={true}
        orientation="horizontal">
        {state.datas.map(c => (
          <View key={c.id}>
            <Forms
              key={c.id}
              id={c.id}
              ref={scroller}
              title={c.text1}
              placeholder={c.placeholder}
              text2={c.text2}
              scroll={handleScroll}
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
