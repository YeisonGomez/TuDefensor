import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Navigator from './src/navigation';
import { store } from './src/store/store';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )

  }
}