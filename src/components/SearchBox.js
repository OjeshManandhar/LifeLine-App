import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import {Avatar} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import useDriverData from '../hooks/useDriverData';

import UserProfile from '../components/UserProfile';

import {Ip} from '../const/ip';

function SearchBox(props) {
  const [keyword, setKeyword] = useState('');
  const {userInfo, userContact} = useDriverData('9808111222');
  const [visible, setVisible] = useState(false);
  const imgUrl = Ip.driver_pic + userContact;

  function renderAvatar(pic) {
    if (pic === null || !pic) {
      return <Avatar.Text label="U" size={45} style={styles.dummy} />;
    } else {
      return (
        <Avatar.Image
          source={{
            uri: imgUrl,
          }}
          size={45}
        />
      );
    }
  }

  return (
    <View style={styles.container}>
      {!props.isSearching ? (
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="md-menu" size={45} color="#fff" />
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
      <TouchableOpacity style={styles.avatar} onPress={() => setVisible(true)}>
        {userInfo ? (
          renderAvatar(userInfo.pic_location)
        ) : (
          <Avatar.Text label="U" size={45} style={styles.dummy} />
        )}
      </TouchableOpacity>
      {userInfo ? (
        <UserProfile
          visible={visible}
          setVisible={setVisible}
          data={userInfo}
          imgUrl={imgUrl}
        />
      ) : null}
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
  dummy: {
    backgroundColor: 'white',
  },
  avatar: {
    marginLeft: 10,
  },
});

export default SearchBox;
