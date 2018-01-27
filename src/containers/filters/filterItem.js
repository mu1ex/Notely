import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';

const onPressFilter = (value, onClickHandler) => () => {
  onClickHandler(value);
}

const FilterItem = ({ name, value, isSelected, onClick, iconName }) => (
  <TouchableOpacity onPress={onPressFilter(value, onClick)} style={styles.itemContainer}>
    <Text style={isSelected === true ? styles.labelSelected : styles.label}>{name}</Text>
    <Icon name={iconName} size={25} color={isSelected === true ? '#50E3C2' : '#FFFFFF'} />
  </TouchableOpacity>
);

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterItem;
