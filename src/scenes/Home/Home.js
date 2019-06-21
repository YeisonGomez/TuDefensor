import React, { Component } from 'react';
import BackgroundGeolocation from "react-native-background-geolocation";

import { Platform, StyleSheet, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Content, Fab, List, ListItem } from 'native-base';
import ActionSheet from 'react-native-actionsheet'
import Modal from "react-native-modal";

import styles from './Home.styles';
import RangeSlider from 'rn-range-slider';

const cards = [
  {
    text: 'Al salir de casa',
    name: 'No olvides revisar los alredores',
    image: 'https://res.cloudinary.com/cacaotics/image/upload/v1561109396/wooden-house.png',
  },
  {
    text: 'Card Two',
    name: 'OTowne',
    image: 'https://image.flaticon.com/icons/svg/1868/1868013.svg',
  },
];

export default class Home extends Component {

  state = {
    sharedGeolocation: false,
    isVisible: false,
    astbeltProgress: 0,
  };

  toggleModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  showActionSheet = () => {
    this.ActionSheet.show()
  }

  async componentWillMount() {
    this.setState({ sharedGeolocation: await BackgroundGeolocation.getState().enabled });
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
    const { sharedGeolocation, astbeltProgress } = this.state;
    return (

      <Container>
        <View style={styles.container}>
          <StatusBar backgroundColor="#B01D1D" barStyle="light-content" />
          <View style={styles.panelHeader}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.signupText}>Acceder</Text>
              <Text style={styles.title}>Home</Text>
              <Text style={styles.signupText} onPress={this.showActionSheet}>más</Text>
              <Modal isVisible={this.state.isVisible}
                onSwipeComplete={() => this.setState({ isVisible: false })}
                onBackdropPress={() => this.toggleModal()}
              >
                <View style={{ height: 300, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>Tiempo de riesgo potencial</Text>
                  <RangeSlider
                    rangeEnabled={false}
                    style={{ width: 160, height: 80 }}
                    min={1}
                    max={1000}
                    step={20}
                    selectionColor="#3df"
                    blankColor="#f618"
                    onValueChanged={(low, high, fromUser) => {
                      this.setState({ astbeltProgress: low })
                    }} />
                  <Text>{astbeltProgress} Horas</Text>
                  <TouchableOpacity style={styles.btnShareLocation} onPress={() => this.toggleModal()} >
                    <Text style={styles.btnShareLocation__text}>Aceptar </Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <ActionSheet
                ref={o => this.ActionSheet = o}
                title={'Acciones'}
                options={['Tiempo de riesgo', 'Cerrar sesión', 'cancel']}
                cancelButtonIndex={2}
                onPress={(index) => {
                  if (index === 0) {
                    this.toggleModal()
                  }
                }}
              />
            </View>
            <Content style={styles.panel}>
              <View >
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Tu zona</Text>
                  <Text style={styles.sectionSubTitle}>Basados en tu ubicación</Text>
                  {sharedGeolocation &&
                    <List>
                      <ListItem style={{ justifyContent: "space-between" }} >
                        <View>
                          <Text style={{ fontWeight: "100", fontSize: 12, color: "#666" }}>zona de poco riesgo </Text>
                          <Text>Bogotá, Colombia </Text>
                        </View>
                        <View>
                          <Text>Riesgo </Text>
                          <Text style={{ fontWeight: "100", fontSize: 12, color: "#666" }}>Zona Amarilla </Text>
                        </View>
                        <View>
                          <Image style={{ width: 24, height: 38 }} source={{ uri: 'https://res.cloudinary.com/cacaotics/image/upload/v1561113352/Group_4.png' }} />
                        </View>
                      </ListItem>
                    </List>
                  }
                  <Text style={[styles.sectionCopy, styles['sectionCopy--empty']]}>Recuerda que tu ubicación no se comparte hasta que tu lo decidas</Text>
                  <TouchableOpacity style={styles.btnShareLocation} onPress={() => this.onSharedGeolocation(!sharedGeolocation)} >
                    <Text style={styles.btnShareLocation__text}>{!sharedGeolocation ? 'Compartir mi' : 'Dejar de compartir'} Ubicación</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Consejos de autoprotección</Text>
                  <Text style={styles.sectionSubTitle}>Explora consejos utiles para tu día a día</Text>
                  <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={cards}
                    renderItem={item =>
                      <Card style={{ elevation: 3 }}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={{ uri: 'https://image.freepik.com/vector-gratis/ilustracion-vector-megafono-mano_16734-28.jpg' }} />
                            <Body>
                              <Text>{item.text}</Text>
                              <Text note>12/04/19</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody style={{ justifyContent: "center" }}>
                          <Image style={{ height: 100, width: 100 }} source={{ uri: item.image }} />
                        </CardItem>
                        <CardItem>
                          <Text>{item.name}</Text>
                        </CardItem>
                      </Card>
                    }
                  />
                </View>
              </View>
            </Content>
          </View>
        </View>
        <Fab direction="right" position="bottomRight" style={{ backgroundColor: '#e60023', borderColor: "#fff", borderWidth: 1, width: 75, height: 75, borderRadius: 200 }}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>SOS</Text>
        </Fab>
      </Container >
    );
  }
}


