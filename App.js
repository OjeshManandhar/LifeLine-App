import React from 'react';
import {View, StyleSheet} from 'react-native';

// Package
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import Users from './src/screens/Users';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

const AppNavigator = createStackNavigator(
  {
    Users: {screen: Users},
    Login: {screen: Login},
    Home: {screen: Home},
    Detail: {screen: Detail},
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});

export default App;
