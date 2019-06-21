import React, { Component } from 'react';
import BackgroundGeolocation from "react-native-background-geolocation";

import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends Component {

  state = {
  };

  componentWillMount() { 
  }

  render() {
    const {  } = this.state;

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
