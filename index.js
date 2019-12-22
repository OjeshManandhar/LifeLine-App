/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import UserList from './src/components/UserList';

AppRegistry.registerComponent(appName, () => Login);
