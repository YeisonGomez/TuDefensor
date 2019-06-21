import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
 
import { Platform, StyleSheet, View } from 'react-native';   

export default class Signup extends Component {

  state = {
  };

  componentWillMount() { 
  }

  render() {
    const {  } = this.state;

    return (
      <Container>
      <Header />
      <Content>
        <Button light><Text> Light </Text></Button>
        <Button primary><Text> Primary </Text></Button>
        <Button success><Text> Success </Text></Button>
        <Button info><Text> Info </Text></Button>
        <Button warning><Text> Warning </Text></Button>
        <Button danger><Text> Danger </Text></Button>
        <Button dark><Text> Dark </Text></Button>
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
