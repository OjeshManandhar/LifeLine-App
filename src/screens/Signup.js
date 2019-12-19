import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import SignupPage from '../components/SignupPage';

let scrollXPos = 0;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text1: 'Lets get started...',
      id: '',
      hospital: '',
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    };
  }

  scrollToB = () => {
    scrollXPos = this.state.width * 1;
    this.scroller.scrollTo({x: scrollXPos, y: 0});
  };
  scrollToC = () => {
    scrollXPos = this.state.width * 2;
    this.scroller.scrollTo({x: scrollXPos, y: 0});
  };
  scrollToTop = () => {
    this.scroller.scrollTo({x: 0, y: 0});
  };

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        // showsHorizontalScrollIndicator={false}
        style={styles.container}
        ref={scroller => {
          this.scroller = scroller;
        }}>
        {/* <SignupPage text1={this.state.text1} /> */}

        <View style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create an Account</Text>
          </View>
          <Text style={styles.text}>Lets get started ...</Text>
          <View style={styles.body}>
            <Image
              style={styles.image}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>Please give us your name</Text>
            <View style={styles.textInput}>
              <TextInput
                placeholder="User Name"
                style={styles.holder}
                autoCapitalize="none"
                keyboardType="email-address"
                value={this.state.name}
              />
            </View>
            <Button onPress={this.scrollToB}>Next</Button>
          </View>
        </View>

        <View style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create an Account</Text>
          </View>
          <Text style={styles.text}>A few more steps to go ...</Text>
          <View style={styles.body}>
            <Image
              style={styles.image}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>Please give us your DriverID</Text>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Driver ID"
                style={styles.holder}
                keyboardType="numeric"
                value={this.state.id}
              />
            </View>
            <Button onPress={this.scrollToC}>Next</Button>
          </View>
        </View>

        <View style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create an Account</Text>
          </View>
          <Text style={styles.text}>Great! keep going</Text>
          <View style={styles.body}>
            <Image
              style={styles.image}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.text}>Which Hospital do you work for?</Text>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Hospital"
                style={styles.holder}
                autoCapitalize="none"
                value={this.state.hospital}
              />
            </View>
            <Button onPress={this.scrollToTop}>Next</Button>
          </View>
        </View>
      </ScrollView>
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
