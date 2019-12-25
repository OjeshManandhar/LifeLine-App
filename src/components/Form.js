import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import Button from './Button';
import Pagination from './Pagination';

const Form = props => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    contact: '',
    driver_id: '',
  });
  const handleValue = () => {
    if (props.id === 1) {
      state.name;
    } else if (props.id === 2) {
      state.driver_id;
    } else if (props.id === 3) {
      state.email;
    } else if (props.id === 4) {
      state.contact;
    } else {
      state.password;
    }
  };

  const handleEvent = e => {
    if (props.id === 1) {
      setState({name: e.nativeEvent.text});
    } else if (props.id === 2) {
      setState({driver_id: e.nativeEvent.text});
    } else if (props.id === 3) {
      setState({email: e.nativeEvent.text});
    } else if (props.id === 4) {
      setState({contact: e.nativeEvent.text});
    } else {
      setState({pasword: e.nativeEvent.text});
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(state.name);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.body}>
        <Image style={styles.image} source={require('../assets/dummy.png')} />
        <Text style={styles.text}>Please give us your {props.text2}</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder={props.placeholder}
            style={styles.holder}
            autoCapitalize="none"
            value={handleValue}
            onChange={handleEvent}
          />
        </View>
        <Button onPress={console.log(state)}>Next</Button>
        <Pagination id={props.id} />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    color: '#707070',
    fontSize: 18,
    margin: 20,
  },
  body: {
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  textInput: {
    marginTop: 5,
    marginBottom: 25,
    borderWidth: 1.3,
    opacity: 0.7,
    borderColor: '#707070',
    borderRadius: 11,
    justifyContent: 'center',
  },
  holder: {
    height: 40,
    width: 280,
    padding: 10,
  },
});
