import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import Button from './Button';

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      hospital: '',
    };
  }
  render() {
    console.log(this.props.text1);
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create an Account</Text>
        </View>
        <Text style={styles.text}>{this.props.text1}</Text>
        <View style={styles.body}>
          <Image style={styles.image} source={require('../assets/logo.png')} />
          <Text style={styles.text}>Please give us your Text2</Text>
          <View style={styles.textInput}>
            <TextInput
              placeholder="text3"
              style={styles.holder}
              autoCapitalize="none"
              value={this.props.children}
            />
          </View>
          <Button onPress={this.props.scrollToB}>Next</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    backgroundColor: '#F53D3D',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
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
    height: 180,
    width: 200,
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
