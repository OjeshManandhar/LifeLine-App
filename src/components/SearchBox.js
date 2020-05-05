import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

// components
import Avatar from '../components/Avatar';

// assets
import Menu from '../assets/menu.png';

function SearchBox(props) {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      {!props.isSearching ? (
        <TouchableOpacity>
          <Image style={styles.menuIcon} source={Menu} />
        </TouchableOpacity>
      ) : null}

      <TextInput
        style={styles.inputBox}
        placeholder="Search here"
        value={keyword}
        returnKeyType="search"
        onChangeText={text => setKeyword(text)}
        onFocus={() => props.setIsSearching(true)}
        onSubmitEditing={() => props.setKeyword(keyword)}
        // onBlur={() => props.setIsSearching(false)}
      />

      <Avatar />
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: '#ffffff',
  },
  menuIcon: {
    height: 26,
    width: 33,
    marginRight: 15,
  },
});

export default SearchBox;
