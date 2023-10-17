import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator initialRouteName='Constructores'>
        <Tab.Screen
          name="Constructores"
          component={Tab1}
          initialParams={{ name: this.props.route.params.name }}
          options={{
            headerShown: false,
            tabBarLabel: 'Constructores',
            tabBarIcon: ({ color, size }) =>{
                return <Icon name='eye-outline' color={'orange'} size={40} />

            }
          }}
        />

        <Tab.Screen
          name="Informacion"
          component={Tab2}
          initialParams={{ name: this.props.route.params.name }}
          options={{
            headerShown: false,
            tabBarLabel: 'Información',
            tabBarIcon: ({ color, size }) => {
                return <Icon name='logo-twitch' color={'orange'} size={40} />
            }
          }}

        />
      </Tab.Navigator>
    );

  }
}