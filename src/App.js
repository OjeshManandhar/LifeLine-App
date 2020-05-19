import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { DefaultTheme, Provider as ThemeProvider } from 'react-native-paper';

// Package
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Users from './src/screens/Users';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import MapScreen from './src/screens/MapScreen';

import { MAPBOX_API_KEY } from 'react-native-dotenv';

MapboxGL.setAccessToken(MAPBOX_API_KEY);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff3a3a',
    accent: 'yellow'
  }
};

const AppNavigator = createStackNavigator(
  {
    Users: { screen: Users },
    Login: { screen: Login },
    Home: { screen: Home },
    Detail: { screen: Detail },
    Map: { screen: MapScreen }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);
const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  }
});

export default App;
