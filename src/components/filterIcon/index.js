import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const FilterIcon = ({ onPressHandler, isFiltersApplied }) => (
  <View style={{ position: 'relative' }}>
    <TouchableOpacity onPress={onPressHandler} style={styles.buttonContainer}>
      <Icon name={'md-funnel'} size={25} color={'#000000'} />
      {isFiltersApplied && <View style={styles.filteHighlighted} />}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 5,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  filteHighlighted: {
    position: 'absolute',
    width: 10,
    height: 10,
    top: 8,
    left: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#40DDBF'
  }
});

export default FilterIcon;
