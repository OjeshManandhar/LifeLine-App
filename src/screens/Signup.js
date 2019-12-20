import React, {Component} from 'react';
import {StyleSheet, Dimensions, ScrollView} from 'react-native';
import Form from '../components/Form';

let scrollXPos = 0;
let Width = Dimensions.get('window').width;
let Height = Dimensions.get('window').height;

export default class Signup extends Component {
  state = {
    count: 1,
    data: [
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
        text1: 'Which Hospital do you work for?',
        placeholder: 'Patan Hospital',
        text2: 'hospital name.',
      },
      {
        id: 4,
        text1: 'Great, We need a few more information.',
        placeholder: 'abc@mail.com',
        text2: 'email.',
      },
      {
        id: 5,
        text1: 'Almost there ...',
        placeholder: '98********',
        text2: 'contact.',
      },
      {
        id: 6,
        text1: 'Now, for the final step!!',
        placeholder: 'Password',
        text2: 'password.',
      },
    ],
  };

  scrollTo = () => {
    if (this.state.count < 6) {
      scrollXPos = Width * this.state.count;
      this.scroller.scrollTo({x: scrollXPos, y: 0});
      this.setState({count: this.state.count + 1});
    } else {
      this.scroller.scrollTo({x: 0, y: 0});
      this.setState({count: 1});
    }
  };

  render() {
    console.log(this.state.text1);
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        // showsHorizontalScrollIndicator={false}
        style={styles.container}
        ref={scroller => {
          this.scroller = scroller;
        }}>
        {this.state.data.map(c => (
          <Form
            key={c.placeholder}
            title={c.text1}
            placeholder={c.placeholder}
            text2={c.text2}
            scroll={this.scrollTo}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
    height: Height,
  },
});
