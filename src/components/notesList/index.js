import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import NoteRow from './noteRow';

const styles = StyleSheet.create({});

export default class NotesList extends React.Component {
  getRowComponent = ({ item }) => (
    <NoteRow item={item}
      updateHandler={this.props.updateHandler}
      setDetailNoteHandler={this.props.setNotetoViewHandler}
      navigation={this.props.navigation}
    />
  )

  keyExtractor = (item, index) => (item.id)

  render() {
    return (
      <FlatList
        data={this.props.notes}
        extraData={{ navigation: this.props.navigation }}
        renderItem={this.getRowComponent}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
