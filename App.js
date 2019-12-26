import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Map from './src/screens/Map';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" hideNavBar={true} />
      <Scene key="signup" component={Signup} title="Signup" hideNavBar={true} />
      <Scene key="home" component={Map} hideNavBar={true} />
    </Stack>
  </Router>
);
export default App;
