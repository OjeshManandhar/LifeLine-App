import React from 'react';
import {View, Text, ScrollView, StyleSheet, Keyboard} from 'react-native';

// hooks
import useSearch from '../hooks/useSearch';

// components
import SearchResult from './SearchResult';

function SearchList(props) {
  const {response} = useSearch(props);

  function renderSearchResults() {
    let last = false;
    const searchResult = [];

    for (let i = 0; i < response.length; i++) {
      if (i === response.length - 1) {
        last = true;
      }
      searchResult.push(
        <SearchResult
          key={i}
          data={response[i]}
          last={last}
          setDestination={data => {
            props.setDestination(data);
            props.setIsSearching(false);
            Keyboard.dismiss();
          }}
        />,
      );
    }

    if (response.length !== 0) {
      return <View style={styles.searchResultGroup}>{searchResult}</View>;
    } else if (props.keyword.length !== 0) {
      return (
        <View style={styles.searchResultGroup}>
          <View style={styles.blockContainer}>
            <Text style={styles.blockText}>Sorry no result found</Text>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        {renderSearchResults()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e5e5e5',
  },
  searchResultGroup: {
    marginHorizontal: 10,
    marginTop: 90,
    padding: 2,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#efefef',
    backgroundColor: '#eeeeee',
  },
  blockContainer: {
    padding: 10,
  },
  blockText: {
    fontSize: 15,
  },
});

export default SearchList;
