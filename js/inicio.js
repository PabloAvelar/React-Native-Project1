// Páginas chidas para paletas de colores: https://paletadecolores.com.mx/colores/naranja/

// Paleta de color que estoy usando: https://paletadecolores.com.mx/paleta/f8a834/e19527/ca821a/b46f0d/9d5c00/

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const bg_root = "#fbc77d";
const bg_mainFrame = "#fff";
const bg_login = '#faac3c';
const color_txt = '#fff';
const bg_fb = '#3b5998';
const bg_email = '#333';
const color_borders = '#955903';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../images/inge.png')}
            />
            <View style={styles.login}>
            <Text style={styles.txtTitle}>Welcome to the HandyMan!</Text>

                <View style={styles.buttons}>
                  <View style={[styles.btn, styles.facebook]}>
                    <Image
                      style={styles.icon}
                      source={require('../images/icon_fb.png')}
                    />
                    <Text style={[styles.box, {color: color_txt}]}>Sign in with Facebook</Text>
                  </View>

                  <View style={[styles.btn, styles.email]}>
                    <Image
                      style={styles.icon}
                      source={require('../images/icon_email.png')}
                    />
                    <Text style={[styles.box, {color: color_txt}]}>Sign in with Email</Text>
                  </View>
                  <View>
                    <Text>Don't have an account? <Text style={[styles.hyperlink, {color: color_borders, textDecorationLine: 'underline'}]}>Sign up</Text> </Text>
                  </View>
                </View>

            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    root:{
        height: '100%',
        backgroundColor: color_borders,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:{
        height: '92%',
        width: '85%',
        backgroundColor: bg_mainFrame,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: color_borders,
    },

    logo:{
        marginTop: '13%',
        width: 300,
        height: 300,
    },

    icon:{
      width: 20,
      height: 20,
      marginRight: '10%',
      marginLeft: '10%',
    },

    login:{
        backgroundColor: bg_login,
        borderColor: "#E59729",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtTitle:{
      color: color_txt,
        padding: '5%',
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttons:{
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '70%',
    },

    btn:{
      width: 275,
      height: 60,
      padding: 5,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },

    facebook:{
      backgroundColor: bg_fb,
    },

    email:{
      backgroundColor: bg_email,
    }
});