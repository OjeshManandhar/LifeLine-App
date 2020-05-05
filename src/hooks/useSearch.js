import {useState, useEffect} from 'react';
import {BackHandler, Keyboard} from 'react-native';

// env
import {MAPBOX_API_KEY} from 'react-native-dotenv';

const mbxGeocoder = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoder({accessToken: MAPBOX_API_KEY});

const useSearch = props => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (props.keyword !== '') {
      geocoder();
    }

    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyword]);

  function parseResponse(match) {
    const locations = [];
    const features = match.features;

    for (let key in features) {
      const data = {
        id: features[key].id,
        name: features[key].text,
        coordinate: features[key].center,
        location: features[key].place_name,
      };

      locations.push(data);
    }

    return locations;
  }

  function geocoder() {
    geocodingClient
      .forwardGeocode({
        query: props.keyword,
        countries: ['np'],
      })
      .send()
      .then(res => {
        const match = res.body;

        setResponse(parseResponse(match));
      });
    error => {
      const match = error.body;

      console.log('error:', match);
    };
  }

  function handleBackButton() {
    props.setIsSearching(false);
    // to blur the InutText
    Keyboard.dismiss();
    return true;
  }

  return {response};
};

export default useSearch;
