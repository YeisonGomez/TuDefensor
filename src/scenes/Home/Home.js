import React, { Component } from 'react';
import BackgroundGeolocation from "react-native-background-geolocation";

import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {

  state = {
    sharedGeolocation: false
  };

  async componentWillMount() { 
    this.setState({sharedGeolocation: await BackgroundGeolocation.getState().enabled});
  }

  componentWillUnmount() {
  }

  onSharedGeolocation(stateSharedGeolocation) {
    if (stateSharedGeolocation) {
      BackgroundGeolocation.onLocation(this.onLocation, this.onError);
      // This handler fires when movement states changes (stationary->moving; moving->stationary)
      BackgroundGeolocation.onMotionChange(this.onMotionChange);
      // This event fires when a change in motion activity is detected
      BackgroundGeolocation.onActivityChange(this.onActivityChange);
      // This event fires when the user toggles location-services authorization
      BackgroundGeolocation.onProviderChange(this.onProviderChange);
      BackgroundGeolocation.ready({
        // Geolocation Config
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        // Activity Recognition
        stopTimeout: 1,
        // Application config
        debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
        // HTTP / SQLite config
        url: 'http://yourserver.com/locations',
        batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
        headers: {              // <-- Optional HTTP headers
          "X-FOO": "bar"
        },
        params: { "auth_token": "maybe_your_server_authenticates_via_token_YES?" }
      }, (state) => {
        this.setState({ sharedGeolocation: true });
        if (!state.enabled) {
          // 3. Start tracking!
          BackgroundGeolocation.start(() => {
            console.log("- Start success");
          });
        } else {
        }
      });
    } else {
      this.setState({ sharedGeolocation: false });
      BackgroundGeolocation.removeListeners();
    }
  }

  onLocation(location) {
    console.log('[location] - ', new Date(), location);
  }

  onError(error) {
    console.warn('[location] ERROR -', error);
  }

  onActivityChange(event) {
    console.log('[activitychange] -', event);  // eg: 'on_foot', 'still', 'in_vehicle'
  }

  onProviderChange(provider) { 
    console.log('[providerchange] -', provider.enabled, provider.status);
  }

  onMotionChange(event) {
    console.log('[motionchange] -', event.isMoving, event.location);
  }

  render() {
    const { sharedGeolocation } = this.state;

    return (
      <View style={styles.container}>
        <Button title={`${!sharedGeolocation? 'Activar': 'Desactivar' } Geolocalización`} onPress={() => this.onSharedGeolocation(!sharedGeolocation)}/>
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
