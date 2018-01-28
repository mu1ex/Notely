import React from 'react';
import { compose, withProps } from 'recompose';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Header from '../../components/header';
import NotesList from '../../components/notesList';
import { setNotetoView } from '../noteDetail/actions';
import { updateNote, deleteNote } from './actions';
import { resetUnappliedFilters } from '../filters/actions';
import { filterConstants } from '../../constants';
import FilterIcon from '../../components/filterIcon';


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

  openAddNoteView = () => {
    this.props.navigation.navigate('NoteDetail', { createMode: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Notely</Text>
            <View style={{ flexDirection: 'row' }}>
              <FilterIcon onPressHandler={this.openFilters} isFiltersApplied={this.props.appliedFilters.length > 0}/>
              <TouchableOpacity onPress={this.openAddNoteView} style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                <Icon name={'md-add'} size={25} color={'#000000'} />
              </TouchableOpacity>
            </View>
          </View>
        </Header>
        <NotesList
          updateHandler={this.props.updateNote}
          notes={this.props.filterdNotes}
          setNotetoViewHandler={this.props.setNotetoView}
          navigation={this.props.navigation}
          deleteNoteHandler={this.props.deleteNote}
        />
      </View>
    );
  }
}

export default compose(
  connect(
    state => ({
      notes: state.notes.allNotes,
      appliedFilters: state.filters.appliedFilters,
    }), {
      setNotetoView,
      updateNote,
      deleteNote,
      resetUnappliedFilters,
    }
  ),
  withProps(({ appliedFilters, notes }) => {
    let filterdNotes = notes;
    if (appliedFilters.length > 0) {
      appliedFilters.map((filterItem) => {
        if (filterItem === filterConstants.HEARTED) {
          filterdNotes = filterdNotes.filter(item => item.isHearted)
        } else if (filterItem === filterConstants.FAVOURITED) {
          filterdNotes = filterdNotes.filter(item => item.isFavourite)
        }
      });
    }
    return {
      filterdNotes
    }
  }),
)(HomeScreen)



