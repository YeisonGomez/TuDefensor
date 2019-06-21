import React, { Component } from 'react';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

export default class NewsContacts extends Component {

  state = { phones: [''] };

  componentWillMount() { 
  }

  handleAddPhone(){
    this.setState({ phones: [ ...this.state.phones, '' ] })
  }

  handleRemovePhone(index){    
    let temp_phones = this.state.phones;
    temp_phones.splice(index, 1);
    this.setState({ phones: temp_phones })
  }

  render() {
    const { phones } = this.state;

    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            { phones.map((phone, index) => 
              <View key={index}>
                <Item>
                  <Input type="number" placeholder="Número de confianza"  />
                { index !== 0 && <Button light onPress={() => this.handleRemovePhone(index) }><Text>Eliminar</Text></Button> }
                </Item>
              </View>
            )}
            <Button light onPress={() => this.handleAddPhone() }><Text>Añadir</Text></Button>

            <Item>
              <Input type="text" placeholder="Mensaje personalizado" />
            </Item>
          </Form>
        </Content>
      </Container>
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
