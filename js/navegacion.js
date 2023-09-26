import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './inicio';
import Inscripcion from './inscripcion';
import Menu from './menu';
import DrawerNavigator from './drawer';

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Inicio} options={{headerShown:false}}/>
            <Stack.Screen name="Inscripcion" component={Inscripcion} options={{headerShown:false}}/>
            <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
