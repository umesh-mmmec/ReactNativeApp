/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Login from './src/component/loginscreen';
import Dashboard from './src/component/dashboard';

export default class App extends Component {
  render() {
    return (
      <NavigationScreen />
    );
  }
}

const NavigationScreen = createStackNavigator({
  Login:{screen: Login},
  Dashboard:{screen: Dashboard}
})
