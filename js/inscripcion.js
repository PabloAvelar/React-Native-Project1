import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Image} from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal_window:false,
    };
}

render() {
    const bg_fb = '#3b5998';
    const bg_email = '#333';

    const facebook = () =>{
        this.setState({modal_window:true});
    }

    const email = () => {
        this.setState({modal_window:true});
    }
    const closeModal = () => {
        this.setState({modal_window:false});
    }
    return (
    <View style={styles.root}>
        <View style={[styles.container, styles.shadow]}>
            <View style={{height: '13%', alignItems: 'center', justifyContent:'space-between'}}>
                <Text style={styles.title}>Create an account</Text>
                <Text style={styles.subtitle}>Join today.</Text>
            </View>

            <View style={styles.buttons_area}>
                <TouchableOpacity style={[styles.btn, styles.shadow, {backgroundColor: bg_fb}]}>
                    <Image
                        style={styles.icon}
                        source={require('../images/icon_fb.png')}
                      />
                    <Text onPress={facebook} style={{color: '#fff'}}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.shadow, {backgroundColor: bg_email}]} >
                    <Image
                        style={styles.icon}
                        source={require('../images/icon_email.png')}
                      />
                    <Text onPress={email} style={{color: '#fff'}}>Continue with Email</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={{color: '#000'}}>Already have an account? <Text style={{color: "#955903", textDecorationLine: 'underline'}}>Log in</Text></Text>
            </View>
        </View>

        <Modal transparent={false} visible={this.state.modal_window} animationType="fade">
            <View style={[styles.modal, styles.shadow]}>
                <View style={styles.form}>
                    <TextInput placeholder='Name' style={styles.textfield}/>

                    <TextInput placeholder='Email' style={styles.textfield}/>

                    <TextInput placeholder='Password' style={styles.textfield}/>

                </View>

                <TouchableOpacity style={[styles.btn, styles.create_btn, styles.shadow]} onPress={closeModal}>
                    <Text>Create</Text>
                </TouchableOpacity>
            </View>
        </Modal>

    </View>
    );
  }
}
const bg_root = '#faac3c';

const styles = StyleSheet.create({
    textfield:{
        borderBottomWidth: 2,
    },

    form:{
        width: '80%',
        height: '60%',
        justifyContent: 'space-between'
    },

    modal:{
        backgroundColor: "#333",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        height: "50%",

        marginVertical: '50%',
        marginHorizontal: '5%',
        borderRadius: 13,
    },

    create_btn:{
        color: '#ddd',
        width: 210,
        height: 50,
        fontSize: 20,
        backgroundColor: '#202020',
        justifyContent: 'center',
    },

    root:{
        backgroundColor: bg_root,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:{
        backgroundColor: '#fff',
        color: '#000',
        height: '80%',
        width: '85%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height:4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    icon:{
        width: 20,
        height: 20,
        marginRight: '10%',
        marginLeft: '10%',
      },

    title:{
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },

    subtitle:{
        color: '#000',
        fontSize: 18,
    },

    buttons_area:{
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    btn:{
        color: '#000',
        width: 275,
        height: 60,
        padding: 5,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
});