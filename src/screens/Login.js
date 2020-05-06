import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

// const
import {LoginText} from '../const';

// component
import Button from '../components/Button';
import Alert from '../components/Alert';

// hooks
import useLogin from '../hooks/useLogin';

// assets
import logo from '../assets/logo.png';

const Login = ({navigation}) => {
  const {
    name,
    setName,
    pass,
    setPass,
    visible,
    setVisible,
    title,
    setTitle,
    detail,
    setDetail,
    disable,
    handleLogin,
  } = useLogin(navigation);
  const [shift, setShift] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.container}
      enabled={shift}>
      <View>
        <ImageBackground
          style={styles.background}
          source={require('../assets/Back.png')}>
          <View style={styles.header}>
            <Text style={styles.title}>LifeLine - Driver</Text>
            <Image style={styles.logo} source={logo} />
            <View style={styles.shadow} />
          </View>
          <View style={styles.content}>
            <View style={styles.textInput}>
              <Icon name="md-call" size={32} color="#ff3a3a" />
              <TextInput
                label="Contact"
                mode="outlined"
                style={styles.holder}
                value={name}
                onFocus={() => setShift(false)}
                onChange={e => setName(e.nativeEvent.text)}
              />
            </View>
            <View style={styles.textInput}>
              <Icon name="ios-unlock" size={32} color="#ff3a3a" />
              <TextInput
                secureTextEntry
                label="Password"
                mode="outlined"
                style={styles.holder}
                value={pass}
                onFocus={() => setShift(true)}
                onChange={e => setPass(e.nativeEvent.text)}
              />
            </View>
            <View style={styles.button}>
              <Button onPress={handleLogin} title="Login" disable={disable} />
            </View>
            <View style={styles.fotter}>
              <Text style={styles.text}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                  setTitle(LoginText.Signup.title);
                  setDetail(LoginText.Signup.detail);
                }}>
                <Text style={styles.link}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Alert
        visible={visible}
        setVisible={setVisible}
        title={title}
        detail={detail}
      />
    </KeyboardAvoidingView>
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
    marginTop: 0,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  holder: {
    height: 40,
    width: 250,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
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
    color: '#ff3a3a',
  },
});
