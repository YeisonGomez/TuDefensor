import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Item, Input, Icon, Content, Button, Text, Picker } from 'native-base';
import AuthActions from  '../../services/auth/authReducer';

class Signup extends Component {

  state = {
    form: { cause: 'derechos_humanos' }
  };

  componentWillMount() { 
  }

  handleSignup(){
    this.props.signup(this.state.form);
  }

  handleChangeInput(event, key){ 
    this.setState({ form: { ...this.state.form, [key]: event }});
  }

  render() {
    const { form } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input id="name" type="text" placeholder="Nombres" onChangeText={(e) => this.handleChangeInput(e, 'name')} />
            </Item>
            <Item last>
              <Input id="lastName" type="text" placeholder="Apellidos" onChangeText={(e) => this.handleChangeInput(e, 'lastName')}/>
            </Item>
            <Item last>
              <Input id="dni" type="text" placeholder="Cédula" onChangeText={(e) => this.handleChangeInput(e, 'dni')}/>
            </Item>
            <Item last>
              <Input id="email" type="email" placeholder="Correo" onChangeText={(e) => this.handleChangeInput(e, 'email')}/>
            </Item>
            <Item last>
              <Input id="password" type="password" placeholder="Contraseña" onChangeText={(e) => this.handleChangeInput(e, 'password')}/>
            </Item>
            <Item last>
              <Input id="community" type="community" placeholder="Comunidad" onChangeText={(e) => this.handleChangeInput(e, 'community')}/>
            </Item>
            <Item picker>
              <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="Selecciona una causa"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={form.cause}
                  onValueChange={(value) => this.handleChangeInput(value, 'cause')}
                >
                  <Picker.Item label="Derechos humanos" value="derechos_humanos" />
                  <Picker.Item label="Estudiantil" value="estudiantil" />
                  <Picker.Item label="Comunitario" value="comunitario" />
                  <Picker.Item label="LGBTI" value="lgbti" />
                  <Picker.Item label="Sustitución de cultivos" value="sustitucion_cultivos" />
                  <Picker.Item label="Reclamante de tierras" value="reclamante_tierras" />
                  <Picker.Item label="Sindical" value="sindical" />
                  <Picker.Item label="Ambiental" value="ambiental" />
                  <Picker.Item label="Comunal" value="comunal" />
                </Picker>
            </Item>
          </Form>
          <Button block onPress={() => this.handleSignup()}>
            <Text>Registrase</Text>
          </Button>
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  signup: AuthActions.signup
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);


