/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Signup from './screens/Signup';
import SignupPage from './components/SignupPage';

AppRegistry.registerComponent(appName, () => Signup);
