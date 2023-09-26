import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('--------MENU---------');
    return (
      <View style={styles.root}>
        <View style={styles.header}>
        <View style={styles.drawerMenu}>
            <Image style={{width: 30, height: 30}} source={require('../images/drawermenu.png')}/>
          </View>

          <View style={styles.profileInMenu}>
            <Image style={{width: 30, height: 30}} source={require('../images/user.png')}/>
            <Text style={{ color: "#f1f1f1", fontSize: 16, }}>{this.props.route.params.name}</Text>
          </View>

          <View style={styles.cart}>
            <Image style={{width: 30, height: 30}} source={require('../images/cart.png')}/>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.container}>
          </View>
        </View>

      </View>
    );
  }
}

const mainColor = '#faac3c';
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    color: 'black',
    height: '100%',
  },

  header: {
    backgroundColor: mainColor,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  profileInMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,


    // borderWidth: 2,
    // borderColor: 'red',
  },

  body: {
    backgroundColor: 'white',
    height: '90%',
    alignItems: 'center',
  },
  
  container: {
    // backgroundColor: 'green',
    marginTop: '10%',
    width: '90%',
    height: '90%'
  }



});
