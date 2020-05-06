import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {Avatar} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

// assets
import profile from '../assets/profile.jpg';

function SearchBox(props) {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      {!props.isSearching ? (
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="md-menu" size={50} color="#fff" />
        </TouchableOpacity>
      ) : null}

      <TextInput
        style={styles.inputBox}
        placeholder="Search here"
        placeholderTextColor="#fff"
        value={keyword}
        returnKeyType="search"
        onChangeText={text => setKeyword(text)}
        onFocus={() => props.setIsSearching(true)}
        onSubmitEditing={() => props.setKeyword(keyword)}
      />
      <TouchableOpacity style={styles.avatar}>
        <Avatar.Image source={profile} size={55} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputBox: {
    flex: 1,
    height: 40,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 0,
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  menuIcon: {
    marginRight: 10,
  },
  avatar: {
    marginLeft: 10,
  },
});

export default SearchBox;
