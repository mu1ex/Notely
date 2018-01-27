import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  large: {
    height: 140,
  }
});

const styles = {
  small: baseStyles.container,
  large: StyleSheet.flatten([baseStyles.container, baseStyles.large])
}

export default class Header extends React.Component {
  static propTypes = {
    headerSize: PropTypes.oneOf(['large', 'small']),
    children: PropTypes.node
  }

  static defaultProps = {
    headerSize: 'small'
  }

  render() {
    const { children, headerSize } = this.props;
    return (
      <View style={styles[this.props.headerSize]}>
        {children}
      </View>
    );
  }
}