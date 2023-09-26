// Páginas chidas para paletas de colores: https://paletadecolores.com.mx/colores/naranja/

// Paleta de color que estoy usando: https://paletadecolores.com.mx/paleta/f8a834/e19527/ca821a/b46f0d/9d5c00/

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_window: false,
      email: '',
      password: ''
    };
  }

  render() {
    let move_to_menu = false;
    const facebook = () => {
      console.log('Iniciar sesión con facebook');
      this.setState({ modal_window: true });
    }

    const email = () => {
      console.log('Iniciar sesión con email');
      this.setState({ modal_window: true });
    }

    const toSignUp = () => {
      this.props.navigation.navigate('Inscripcion');
    }

    const closeModal = () => {
      if (this.state.email.trim() === '' || this.state.password.trim() === '') {
        Alert.alert('Campos requeridos', 'Llena todo los campos del formulario.');
        return
      }

      // Copiando la referencia del constructor para poder usarlo dentro de un callback
      const _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          if (xhttp.responseText === '0') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'La contraseña es incorrecta. Intenta de nuevo.'
              );
            return; 
          } else if (xhttp.responseText === '3') {
            Alert.alert(
              'Ha ocurrido un error :(',
              'Cuenta no existente. ¡Crea una cuenta con nosotros!'
              );
              return; 
            }else{
              // Con la referencia del constructor copiada
              _this.props.navigation.navigate('Menu', {name: xhttp.responseText, email: _this.state.email, password: _this.state.password});
            }
          }
        };
        
        // Verificando desde la base de datos
        xhttp.open("GET", `https://avelararmenta.000webhostapp.com/verifica.php?correo=${this.state.email}&contraseña=${this.state.password}`, true);
        xhttp.send();

        this.setState({ modal_window: false }); 
      }
      
      return (
        <View style={styles.root}>
        <View style={[styles.container, styles.shadow]}>
          <Image
            style={styles.logo}
            source={require('../images/inge.png')}
          />
          <View style={styles.login}>
            <Text style={styles.txtTitle}>Welcome to the HandyMan</Text>
            <View style={styles.buttons}>

              <TouchableOpacity style={styles.clickable_btn} onPress={facebook} >
                <View style={[styles.btn, styles.shadow, styles.facebook]}>
                  <Image
                    style={styles.icon}
                    source={require('../images/icon_fb.png')}
                  />
                  <Text style={[styles.box, { color: color_txt }]}>Log in with Facebook</Text>
                </View>

              </TouchableOpacity>

              <TouchableOpacity style={styles.clickable_btn} onPress={email}>
                <View style={[styles.btn, styles.shadow, styles.email]}>
                  <Image
                    style={styles.icon}
                    source={require('../images/icon_email.png')}
                  />
                  <Text style={[styles.box, { color: color_txt }]}>Log in with Email</Text>
                </View>
              </TouchableOpacity>
              <View>
                <TouchableOpacity onPress={toSignUp}>
                  <Text>Don't have an account? <Text style={[styles.hyperlink, { color: color_borders, textDecorationLine: 'underline' }]}>Sign up</Text> </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Modal transparent={false} visible={this.state.modal_window} animationType='fade'>
          <View style={[styles.modal, styles.shadow]}>
            <TouchableOpacity style={styles.ExitModal} onPress={() => {
              console.log('Cerando modal: X');
              this.setState({ modal_window: false });
            }}>
              <Text style={{ color: "white", fontSize: 20 }}>x</Text>
            </TouchableOpacity>
            <View style={styles.form}>
              <TextInput placeholder='Email' placeholderTextColor={'white'} style={styles.textfield} onChangeText={email => this.setState({ email })} />
              <TextInput placeholder='Password' placeholderTextColor={'white'} style={styles.textfield} onChangeText={password => this.setState({ password })} />
            </View>
            <TouchableOpacity style={[styles.btn, styles.create_btn, styles.shadow, { color: 'white' }]} onPress={closeModal}>
              <Text>Log in</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const bg_root = "#fbc77d";
const bg_mainFrame = "#fff";
const bg_login = '#faac3c';
const color_txt = '#fff';
const bg_fb = '#3b5998';
const bg_email = '#333';
const color_borders = '#955903';

const styles = StyleSheet.create({

  ExitModal: {
    position: 'absolute',
    right: 5,
    top: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 45,
    height: 45,

  },

  form: {
    width: '80%',
    height: '60%',
    justifyContent: 'space-evenly'
  },

  modal: {
    backgroundColor: "#333",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%',
    height: "50%",

    marginVertical: '50%',
    marginHorizontal: '5%',
    borderRadius: 13,
  },

  create_btn: {
    color: '#ddd',
    width: 210,
    height: 50,
    fontSize: 20,
    backgroundColor: '#202020',
    justifyContent: 'center',
  },

  textfield: {
    borderBottomWidth: 2,
  },
  clickable_btn: {
    width: 275,
    height: 60,
    alignItems: 'center',
  },

  root: {
    height: '100%',
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  container: {
    height: '92%',
    width: '85%',
    backgroundColor: bg_mainFrame,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: color_borders,
  },

  logo: {
    marginTop: '13%',
    width: 300,
    height: 300,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: '10%',
    marginLeft: '10%',
  },

  login: {
    backgroundColor: bg_login,
    borderColor: "#E59729",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  txtTitle: {
    color: color_txt,
    padding: '5%',
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttons: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '70%',
  },

  btn: {
    width: 275,
    height: 60,
    padding: 5,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  facebook: {
    backgroundColor: bg_fb,
  },

  email: {
    backgroundColor: bg_email,
  }
});