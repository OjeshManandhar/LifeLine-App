import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Button from '../components/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/Back.png')}>
        <View style={styles.header}>
          <Text style={styles.title}>LifeLine - Driver</Text>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={styles.shadow} />
        </View>
        <View style={styles.content}>
          <View style={styles.textInput}>
            <Image style={styles.icon} source={require('../assets/Mail.png')} />
            <TextInput
              placeholder="Email"
              style={styles.holder}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textInput}>
            <Image style={styles.icon} source={require('../assets/Lock.png')} />
            <TextInput
              secureTextEntry
              placeholder="Password"
              style={styles.holder}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={Actions.home}>Log In</Button>
          </View>
          <View style={styles.fotter}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={Actions.signup}>
              <Text style={[styles.text, styles.link]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans-serif',
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  content: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 10,
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 10,
    zIndex: 1,
  },
  textInput: {
    marginTop: 25,
    marginBottom: 5,
    borderWidth: 1.5,
    borderColor: '#707070',
    borderRadius: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  holder: {
    height: 40,
    width: 250,
    padding: 10,
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    marginTop: 25,
  },
  fotter: {
    marginTop: 25,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
  },
  link: {
    color: '#FF3A3A',
  },
});
