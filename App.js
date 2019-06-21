import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/scenes/Home/Home';
import Login from './src/scenes/Login/Login';
import Signup from './src/scenes/Signup/Signup';
 
const MainNavigator = createStackNavigator({
  Signup: {screen: Signup},
  Home: {screen: Home},
  Login: {screen: Login},
});

const App = createAppContainer(MainNavigator);

export default App;