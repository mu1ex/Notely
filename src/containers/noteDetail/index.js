import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { get } from 'lodash';
import moment from 'moment';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Header from '../../components/header';
import { clearDetailNoteData } from './actions';
import { updateNote } from '../home/actions';

class NoteDetail extends React.Component {
  state = {
    isEditMode: false,
    title: '',
    content: '',
  }

  onPressBack = () => {
    if (this.state.isEditMode) {
      this.setState({ isEditMode: false });
    } else {
      const { navigation } = this.props;
      navigation.dispatch(NavigationActions.back());
    }
  }

  toggleEdit = () => {
    if (this.state.isEditMode) {
      this.setState({ isEditMode: false });
    } else {
      const { currentSelectedNote } = this.props;
      const masterContent = get(currentSelectedNote, 'content', '');
      const masterTitle = get(currentSelectedNote, 'title');
      this.setState({ isEditMode: true, content: masterContent, title: masterTitle });
    }
  }

  onPressSave = () => {
    this.props.updateNote(this.props.currentSelectedNote.id, { content: this.state.content, title: this.state.title });
    this.setState({ isEditMode: false });
  }

  setContent = (content) => {
    this.setState({ content });
  }

  setTitle = (title) => {
    this.setState({ title });
  }

  render() {
    const { isEditMode } = this.state;
    const { currentSelectedNote } = this.props;
    const { title, content, updatedAt } = currentSelectedNote;
    return (
      <View style={styles.rootContainer}>
        <Header headerSize={isEditMode ? 'small' : 'large'}>
          <View style={styles.headerContainer}>
            <View style={isEditMode ? styles.editModeControlsContainer : styles.controlsContainer}>
              <TouchableOpacity onPress={this.onPressBack}>
                <Icon name={'md-arrow-back'} size={25} color={'#000000'} />
              </TouchableOpacity>
              {
                isEditMode
                  ? <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => { }}>
                      <Text>Undo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressSave}>
                      <Text>Save</Text>
                    </TouchableOpacity>
                  </View>
                  : <TouchableOpacity onPress={this.toggleEdit}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
              }
            </View>
            {!isEditMode && <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.timeStamp}>{moment(updatedAt).calendar()}</Text>
            </View>}
          </View>
        </Header>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            isEditMode
              ? <View>
                <TextInput
                  style={{ fontSize: 25, fontWeight: '600' }}
                  multiline={true}
                  placeholder={'Add Title...'}
                  underlineColorAndroid={'transparent'}
                  onChangeText={this.setTitle}
                  value={this.state.title}
                />
                <TextInput
                  multiline={true}
                  placeholder={'Add note...'}
                  underlineColorAndroid={'transparent'}
                  onChangeText={this.setContent}
                  value={this.state.content}
                />
              </View>
              : <Text>
                {content}
              </Text>
          }
        </ScrollView>
      </View>
    );
  }

  componentWillUnmount() {
    this.props.clearDetailNoteData();
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    flex: 1,
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.3
  },
  editModeControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  titleContainer: {
    flex: 0.7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  timeStamp: {
    marginTop: 5,
    fontSize: 12,
  },
  contentContainer: {
    paddingHorizontal: 45,
    paddingVertical: 25,
  }
});

export default connect(
  state => ({
    currentSelectedNote: state.noteDetail.currentSelectedNote,
  }),
  {
    clearDetailNoteData,
    updateNote
  }
)(NoteDetail);
