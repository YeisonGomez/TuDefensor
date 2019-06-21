import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../scenes/Home/Home';
import Login from '../scenes/Login/Login';
import Signup from '../scenes/Signup/Signup';

const RNApp = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    signup: {
      screen: Signup,
      navigationOptions: { header: null }
    },
    home: {
      screen: Home,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: 'signup'
  }
);

export default createAppContainer(RNApp);