import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { includes } from 'lodash';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import FilterItem from './filterItem';
import styles from './styles';
import { filters } from '../../constants';
import { toggleFilter, applyFilters } from './actions';

applyFiltersHandler = (filterhandler, navProps, selectedFilters) => () => {
  filterhandler(selectedFilters);
  navProps.navigate('DrawerToggle');
}

const FilterDrawer = ({ unAppliedFilters, applyFilters, toggleFilter, navigation }) => (
  <View style={styles.rootContainer}>
    <View style={styles.topContent}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>FILTER</Text>
        <Icon name={'md-close'} size={25} color={'#FFFFFF'} />
      </View>
      {
        filters.map(item => (
          <FilterItem
            key={item.key}
            name={item.name}
            value={item.key}
            iconName={'md-checkmark'}
            onClick={toggleFilter}
            isSelected={includes(unAppliedFilters, item.key)}
          />)
        )
      }
    </View>
    <View style={styles.bottomContent}>
      <TouchableOpacity onPress={applyFiltersHandler(applyFilters, navigation, unAppliedFilters)} style={styles.applyButton}>
        <Text style={styles.label}>APPLY</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default connect(
  state => ({
    unAppliedFilters: state.filters.unAppliedFilters,
  }),
  {
    toggleFilter,
    applyFilters
  }
)(FilterDrawer);
