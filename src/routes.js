import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FilterDrawer from './containers/filters';
import HomeScreen from './containers/home';
import NoteDetail from './containers/noteDetail';

const filters = DrawerNavigator({
  Home: { screen: HomeScreen },
}, {
    contentComponent: FilterDrawer,
    drawerWidth: 150,
    drawerPosition: 'right',
  });

export default StackNavigator({
  filters: { screen: filters },
  NoteDetail: { screen: NoteDetail },
}, {
    headerMode: 'none'
  });
