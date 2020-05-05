import React, {useState} from 'react';
import {
  View,
  Image,
  Keyboard,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

// components
import Map from '../components/Map';
import SearchBox from '../components/SearchBox';
import SearchList from '../components/SearchList';

// assets
import back from '../assets/back_icon.png';

function MapScreen(props) {
  const [keyword, setKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [destination, setDestination] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        {isSearching && (
          <TouchableNativeFeedback
            onPress={() => {
              setIsSearching(false);
              Keyboard.dismiss();
            }}>
            <Image source={back} style={styles.backIcon} />
          </TouchableNativeFeedback>
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
    width: 30,
    height: 30,
    marginLeft: 5,
  },
});

export default MapScreen;
