import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store';
import Routes from './src/routes';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
