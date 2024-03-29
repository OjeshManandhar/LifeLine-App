import React from 'react';
import {View, StyleSheet} from 'react-native';

// packages
import MapboxGL from '@react-native-mapbox-gl/maps';

function Map({destination}) {
  // console.log('destination:', destination);

  function renderPointAnnotation() {
    return (
      <MapboxGL.PointAnnotation
        key={destination.id}
        id={destination.id}
        coordinate={destination.coordinate}
        title={destination.name}>
        <View style={styles.annotationContainer} />
        <MapboxGL.Callout
          title={`${destination.name}\n${destination.location}`}
        />
      </MapboxGL.PointAnnotation>
    );
  }

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        // A size must be provided to the MapboxGL.MapView through style prop
        style={styles.container}
        styleURL={MapboxGL.StyleURL.Outdoors}>
        <MapboxGL.UserLocation visible />

        <MapboxGL.Camera
          zoomLevel={14}
          followUserLocation={!destination}
          followUserMode={MapboxGL.UserTrackingModes.FollowWithCourse}
          animationMode={'flyTo'}
          animationDuration={6000}
          centerCoordinate={destination && destination.coordinate}
        />

        {destination && renderPointAnnotation()}
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
