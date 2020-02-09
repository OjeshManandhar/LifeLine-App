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
import axios from 'axios';

const Form = (props, ref) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  // const [contact, setContact] = useState('');
  // const [driver_id, setDriverId] = useState('');

  const [form, setState] = useState({
    email: '',
    password: '',
    name: '',
    contact: '',
    driver_id: '',
  });

  const handleValue = () => {
    if (props.id === 1) {
      form.name;
    } else if (props.id === 2) {
      form.driver_id;
    } else if (props.id === 3) {
      form.email;
    } else if (props.id === 4) {
      form.contact;
    } else {
      form.password;
    }
  };

  const handleEvent = e => {
    if (props.id === 1) {
      setState({...form, name: e.nativeEvent.text});
    } else if (props.id === 2) {
      setState({...form, driver_id: e.nativeEvent.text});
    } else if (props.id === 3) {
      setState({...form, email: e.nativeEvent.text});
    } else if (props.id === 4) {
      setState({...form, contact: e.nativeEvent.text});
    } else {
      setState({...form, password: e.nativeEvent.text});
    }
  };

  function handleSubmit() {
    if (props.id === 5) {
      axios
        .post('http://192.168.0.3:5000/driver_signup', {
          // data to be sent
          name: form.name,
          email: form.email,
          password: form.password,
          driver_id: form.driver_id,
          contact: form.contact,
        })
        .then(response => {
          if (response.data.status) {
            console.log(response);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log(form);
    }
  }

  return (
    <View ref={ref} style={styles.container} key={props.id}>
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
        <Button onPress={() => handleSubmit()}>Next</Button>
        <Pagination id={props.id} />
      </View>
    </View>
  );
};

const Forms = React.forwardRef(Form);

export default Forms;

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
