import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Header from '../../components/header';
import NotesList from '../../components/notesList';
import { setNotetoView } from '../noteDetail/actions';
import { updateNote } from './actions';
import { resetUnappliedFilters } from '../filters/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    color: '#000000'
  }
});

class HomeScreen extends React.Component {
  openFilters = () => {
    this.props.resetUnappliedFilters();
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Notely</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.openFilters} style={{ marginRight: 5, paddingVertical: 5, paddingHorizontal: 10 }}>
                <Icon name={'md-funnel'} size={25} color={'#000000'} />
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Icon name={'md-add'} size={25} color={'#000000'} />
              </TouchableOpacity>
            </View>
          </View>
        </Header>
        <NotesList
          updateHandler={this.props.updateNote}
          notes={this.props.notes}
          setNotetoViewHandler={this.props.setNotetoView}
          navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect(
  state => ({
    notes: state.notes.allNotes
  }), {
    setNotetoView,
    updateNote,
    resetUnappliedFilters,
  }
)(HomeScreen)
