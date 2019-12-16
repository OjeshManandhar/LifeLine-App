import React, {Component} from 'react';
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
// import axios from 'axios';
import Button from '../components/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require('../assets/Back.png')}>
          <KeyboardAwareScrollView>
            <View style={styles.header}>
              <Text style={styles.title}>LifeLine - Driver</Text>
              <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
              />
              <View style={styles.shadow} />
            </View>
            <View style={styles.content}>
              <View style={styles.textInput}>
                <Image
                  style={styles.icon}
                  source={require('../assets/Mail.png')}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.holder}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={this.state.email}
                />
              </View>
              <View style={styles.textInput}>
                <Image
                  style={styles.icon}
                  source={require('../assets/Lock.png')}
                />
                <TextInput
                  secureTextEntry
                  placeholder="Password"
                  style={styles.holder}
                  autoCapitalize="none"
                  value={this.state.password}
                />
              </View>
              <View style={styles.button}>
                <Button>Log In</Button>
              </View>
              <View style={styles.fotter}>
                <Text style={styles.text}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </View>
    );
  }
}

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
    marginTop: -10,
  },
  content: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 28,
    marginTop: 50,
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
});
