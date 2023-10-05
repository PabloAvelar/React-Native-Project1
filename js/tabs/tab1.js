import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, DrawerLayoutAndroid, FlatList } from 'react-native';

export default class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }

    openDrawer = () => {
        this.drawer.openDrawer();
    };

    componentDidMount() {
        var xhttp = new XMLHttpRequest();
        _this = this;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhttp.responseText);
                let temp = JSON.parse(xhttp.responseText);
                _this.setState({ dataSource: temp });
            }
        };
        xhttp.open("GET", "https://dcc2.000webhostapp.com/2023B/datos.json", true);
        xhttp.send();
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
                            <Text style={{ color: 'black', fontSize: 25 }}>Trabajadores</Text>
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({ item }) =>

                                    <View style={{ width: 400, heigth: 80 }}>
                                        <Text style={{ color: 'black', marginLeft: 50 }}>{item.Nombre} </Text>
                                        <Text style={{ color: 'black', marginLeft: 50 }}>{item.Profesion} </Text>
                                        <Text style={{ color: 'black', marginLeft: 50 }}>{item.Telefono} </Text>
                                        <Image
                                            source={{ uri: item.Imagen }}
                                            style={{ width: 100, height: 100, marginLeft: 50 }}
                                        />
                                        <View style={{
                                            width: 300,
                                            height: 6,
                                            backgroundColor: 'black',
                                            marginLeft: 50,
                                            marginTop: 10,
                                        }}>
                                        </View>
                                    </View>

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
        marginTop: '10%',
        width: '90%',
        height: '90%',
        alignItems: 'center'
    }



});
