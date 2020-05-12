import React from 'react';
import Map from './screens/Map';
import Login from './screens/Login';
import Signup from './screens/Signup';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        component={Map}
        options={{
          title: 'Map',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
