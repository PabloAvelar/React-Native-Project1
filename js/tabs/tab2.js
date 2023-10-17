import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native';

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        'https://www.youtube.com/shorts/XPXfwOBhqMk',
        'https://www.youtube.com/shorts/rfeUn2Bt1Hs',
        'https://www.youtube.com/watch?v=RMC0hiPpo6w',
      ],
    };
  }

  render() {
    const navigationView = (
      <View style={styles.drawerView}>
        {/* Agrega los elementos del menú lateral aquí */}
        <View style={styles.drawerList}>

          <TouchableOpacity>
            <Text style={styles.drawerOptions}>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.drawerOptions} onPress={() => this.props.navigation.navigate('Inicio')}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        ref={(drawer) => (this.drawer = drawer)}
        drawerWidth={250}
        drawerPosition={'left'}
        renderNavigationView={() => navigationView}
      >

        <View style={styles.root}>
          <View style={styles.header}>
            <View style={styles.drawerMenu}>
              <TouchableOpacity onPress={this.openDrawer}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../images/drawermenu.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.profileInMenu}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../images/user.png')}
              />
              <Text style={{ color: '#f1f1f1', fontSize: 16 }}>
                {this.props.route.params.name}
              </Text>
            </View>

            <View style={styles.cart}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../images/cart.png')}
              />
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.container}>
              <Text style={{ color: 'black', fontSize: 20, padding: 10 }}>Videos</Text>
              <FlatList
                data={this.state.videos}
                horizontal={true}
                renderItem={({ item }) => (
                  <View style={styles.videos}>
                    <WebView source={{uri: item}} />
                  </View>
                )

                }
              />
            </View>
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const mainColor = '#faac3c';
const styles = StyleSheet.create({

  videos: {
    width: 400,
    height: 240
  },

  drawerOptions: {
    fontSize: 25,
    marginLeft: 10,
    marginVertical: 15,
    borderBottomColor: '#f1f1f1',
    borderBottomWidth: 2
  },


  drawerView: {
    backgroundColor: mainColor,
    height: '100%',
  },

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
    width: '90%',
    height: '90%',
    alignItems: 'center'
  }



});
