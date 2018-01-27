import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/dist/Ionicons';
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

  deleteNote = (id) => () => {
    this.props.deleteNoteHandler(id);
  }

  getSlideMenuComponent = (rowData, rowMap) => (
    <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
      <TouchableOpacity style={{ width: 120, backgroundColor: '#E3263D', height: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onPress={this.deleteNote(rowData.item.id)}>
        <Icon name={'md-trash'} size={25} color={'#FFFFFF'} />
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#FFFFFF' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  )

  keyExtractor = (item, index) => (item.id)

  render() {
    return (
      <SwipeListView
        useFlatList={true}
        closeOnRowBeginSwipe={true}
        disableRightSwipe={true}
        data={this.props.notes}
        rightOpenValue={-120}
        renderHiddenItem={this.getSlideMenuComponent}
        extraData={{ navigation: this.props.navigation }}
        renderItem={this.getRowComponent}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}
