import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Menu from './menu';


export default class DrawerNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const DrawerNavigator = createDrawerNavigator();

        return (
            <NavigationContainer>
                <DrawerNavigator.Navigator>
                    <DrawerNavigator.Screen name="Menu" component={Menu} />
                    {/* <DrawerNavigator.Screen name="Profile" component={ProfileScreen} /> */}
                </DrawerNavigator.Navigator>

            </NavigationContainer>
        );
    }
}
