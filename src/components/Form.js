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

export default class Form extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     id: '',
  //     hospital: '',
  //   };
  // }
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create an Account</Text>
        </View>
        <Text style={styles.text}>{this.props.title}</Text>
        <View style={styles.body}>
          <Image style={styles.image} source={require('../assets/dummy.png')} />
          <Text style={styles.text}>
            Please give us your {this.props.text2}
          </Text>
          <View style={styles.textInput}>
            <TextInput
              placeholder={this.props.placeholder}
              style={styles.holder}
              autoCapitalize="none"
              value={this.props.children}
            />
          </View>
          <Button onPress={this.props.scroll}>Next</Button>
          {/* <View style={styles.pagination}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View> */}
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
  // pagination: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // circle: {
  //   width: 10,
  //   height: 10,
  //   borderRadius: 10 / 2,
  //   backgroundColor: 'grey',
  //   marginLeft: 20,
  //   marginTop: 40,
  // },
});
