import React from 'react';
import {View, StyleSheet} from 'react-native';

// Package
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import Users from './src/screens/Users';
import Login from './src/screens/Login';

const AppNavigator = createStackNavigator(
  {
    Users: {screen: Users},
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Users',
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
