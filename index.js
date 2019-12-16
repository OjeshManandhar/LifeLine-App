/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Signup from './screens/Signup';
// import UserList from './components/UserList';

AppRegistry.registerComponent(appName, () => Signup);
