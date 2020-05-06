import React, {useState} from 'react';
import {View, Keyboard, StyleSheet, TouchableOpacity} from 'react-native';

// icons
import Icon from 'react-native-vector-icons/Ionicons';

// components
import Map from '../components/Map';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList';

function MapScreen(props) {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [destination, setDestination] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        {isSearching && (
          <TouchableOpacity
            onPress={() => {
              setIsSearching(false);
              Keyboard.dismiss();
            }}>
            <Icon
              style={styles.backIcon}
              name="ios-arrow-back"
              size={50}
              color="#fff"
            />
          </TouchableOpacity>
        )}
        <SearchBox
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setKeyword={setKeyword}
        />
      </View>

      {isSearching ? (
        <SearchList
          keyword={keyword}
          setIsSearching={setIsSearching}
          setDestination={setDestination}
        />
      ) : (
        <Map
          userInfo={props.navigation.getParam('userInfo')}
          destination={destination}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#E34227',
  },
  searchArea: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  backIcon: {
    marginHorizontal: 10,
  },
});

export default MapScreen;
