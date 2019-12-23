import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Map from './src/screens/Map';

const MainNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Signup: {screen: Signup},
    Home: {screen: Map},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
