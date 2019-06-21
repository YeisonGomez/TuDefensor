import React, { Component } from 'react';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import NavigationService from '../../navigation/NavigationService';

export default class NewsContacts extends Component {

  state = { phones: [''] };

  componentWillMount() {
  }

  handleAddPhone() {
    this.setState({ phones: [...this.state.phones, ''] })
  }

  handleRemovePhone(index) {
    let temp_phones = this.state.phones;
    temp_phones.splice(index, 1);
    this.setState({ phones: temp_phones })
  }

  handleChangeInput(value, index) {
    let temp = this.state.phones;
    temp[index] = value;
    this.setState({ phones: temp });
  }

  next() {
    console.log(this.state.phones);
    NavigationService.navigate('home');
  }

  render() {
    const { phones } = this.state;

    return (
      <Container style={{ backgroundColor: "#363c44", justifyContent: "center" }}>
        <Content style={{ backgroundColor: "#fff", marginVertical: 20, marginHorizontal: 20, borderRadius: 20, paddingVertical: 15, paddingHorizontal: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 22, color: "#333", marginVertical: 10 }}>Contactos de confianza</Text>
          <Text style={{ fontWeight: "100", fontSize: 16, color: "#A3A3A3", marginVertical: 20, marginHorizontal: 20 }}>Tus contactos de confianza recibiran SMS de alerta en caso de situaciones de potencial riesgo</Text>
          <Form>
            {phones.map((phone, index) =>
              <View key={index}>
                <Item>
                  <Input type="number" placeholder="Número de confianza" onChangeText={(value) => this.handleChangeInput(value)} />
                  {index !== 0 && <Button light onPress={() => this.handleRemovePhone(index)}><Text>Eliminar</Text></Button>}
                </Item>
              </View>
            )}
            <View style={{ marginHorizontal: "auto", flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
              <Button light onPress={() => this.handleAddPhone()}><Text>Añadir</Text></Button>
            </View>
            <Item>
              <Input type="text" placeholder="Mensaje personalizado" />
            </Item>
          </Form>
          <View style={{ marginHorizontal: "auto", flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
            <Button style={{ marginHorizontal: "auto", justifyContent: "center" }} light onPress={() => this.next()}><Text>Registrar</Text></Button>
          </View>
        </Content>
      </Container >
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
