import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  topContent: {
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30
  },
  bottomContent: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 15
  },
  label: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  labelSelected: {
    color: '#50E3C2',
    fontSize: 20,
  },
  applyButton: {
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 25
  }
});

export default styles;
