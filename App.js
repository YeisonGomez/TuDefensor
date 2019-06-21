import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/scenes/Home/Home';
 
const MainNavigator = createStackNavigator({
  Home: {screen: Home} 
});

const App = createAppContainer(MainNavigator);

export default App;