import React from 'react';
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
  // const [state, setState] = useState({
  //   email: '',
  //   password: '',
  //   contact: '',
  //   driverid: '',
  //   username: '',
  //   errorMessage: null,
  // });

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
          />
        </View>
        <Button onPress={props.scroll}>Next</Button>
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
