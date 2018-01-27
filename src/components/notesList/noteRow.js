import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { compose, withHandlers } from 'recompose';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { setNotetoView } from '../../containers/noteDetail/actions';
import { extractContentSummary } from '../../utils/stringUtils';


const styles = StyleSheet.create({
  container: {
    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 0.8,
    flexDirection: 'column'
  },
  iconContainer: {
    flex: 0.2,
    flexDirection: 'row',
  },
  title: {
    color: '#000000',
    fontWeight: '500'
  },
  summary: {
    paddingTop: 5,
    color: '#ABABAB',
  },
  timeStamp: {
    paddingTop: 5,
    color: '#D1D1D1',
    fontSize: 11
  },
  buttonContainer: {
    paddingHorizontal: 5,
    marginHorizontal: 2,
  }
});

const onPressRow = (navObject, setDetailNoteHandler, note) => () => {
  setDetailNoteHandler({ ...note });
  navObject.navigate('NoteDetail');
}

const NoteRow = ({ item, navigation, setDetailNoteHandler, toggleFavourite, toggleStar }) => (
  <TouchableHighlight underlayColor={'#DDDDDD'} onPress={onPressRow(navigation, setDetailNoteHandler, item)}>
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.summary}>
          {extractContentSummary(item.content)}
        </Text>
        <Text style={styles.timeStamp}>
          {moment(item.updatedAt).calendar()}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={toggleStar} style={styles.buttonContainer}>
          <Icon name={'md-star'} size={30} color={item.isHearted ? '#F8D01C' : '#F1F1F1'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavourite} style={styles.buttonContainer}>
          <Icon name={'md-heart'} size={30} color={item.isFavourite ? '#FD374F' : '#F1F1F1'} />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableHighlight>
);


export default compose(
  withHandlers({
    toggleFavourite: ({ item, updateHandler }) => () => {
      updateHandler(item.id, { isFavourite: !item.isFavourite })
    },
    toggleStar: ({ item, updateHandler }) => () => {
      updateHandler(item.id, { isHearted: !item.isHearted })
    }
  })
)(NoteRow);
