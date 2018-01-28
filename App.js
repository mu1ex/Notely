import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/store';
import Routes from './src/routes';
import { PersistGate } from 'redux-persist/lib/integration/react'

const { store, persistor } = configureStore();


export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}
