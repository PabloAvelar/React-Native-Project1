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
      <Tab.Navigator initialRouteName='Tilines'>
        <Tab.Screen
          name="Tilines"
          component={Tab1}
          initialParams={{ name: this.props.route.params.name }}
          options={{
            tabBarLabel: 'Tilines',
            tabBarIcon: ({ color, size }) => {
              <Icon name='eye-outline' color={'orange'} size={40} />
            }
          }}
        />
        
        <Tab.Screen
          name="Informacion"
          component={Tab2}
          options={{
            tabBarLabel: 'Tilines',
            tabBarIcon: ({ color, size }) => {
              <Icon name='logo-twitch' color={'orange'} size={40} />
            }
          }}

        />
      </Tab.Navigator>
    );

  }
}