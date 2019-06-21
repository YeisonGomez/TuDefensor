import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import GenerateForm from 'react-native-form-builder';
import { StyleSheet } from 'react-native';   

const fields = [
  {
    type: 'text',
    name: 'names',
    required: true,
    label: 'Nombres',
  },
  {
    type: 'text',
    name: 'lastnames',
    required: true,
    label: 'Apellidos',
  },
  {
    type: 'text',
    name: 'dni',
    required: true,
    label: 'Cédula',
  },
  {
    type: 'text',
    name: 'email',
    required: true,
    label: 'Correo',
  },
  {
    type: 'password',
    name: 'password',
    required: true,
    label: 'Contraseña',
  },
  {
    type: 'text',
    name: 'comunity',
    required: true,
    label: 'Comunidad',
  },
  {
    type: 'picker',
    name: 'cause',
    mode: 'dialog',
    label: 'Causa',
    defaultValue: 'INDIA',
    options: ['US', 'INDIA', 'UK', 'CHINA', 'FRANCE'],
  },
];

export default class Signup extends Component {

  state = {
  };

  componentWillMount() { 
  }

  handleSignup(){
    const formValues = this.formGenerator.getValues();
    console.log('FORM VALUES', formValues);
  }

  render() {
    const {  } = this.state;

    return (
      <Container>
        <Content>
          <GenerateForm ref={(c) => { this.formGenerator = c }} fields={fields}/>
          <Button block onPress={() => this.handleSignup()}>
            <Text>Registrase</Text>
          </Button>
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
