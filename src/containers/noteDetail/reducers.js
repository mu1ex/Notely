import { SET_NOTE_TO_VIEW, CLEAR_DETAIL_NOTE_VIEW } from './actions';
import { UPDATE_NOTE, ADD_NOTE } from '../home/actions';

const initialAppState = {
  currentSelectedNote: {
    title: '',
    content: '',
    updatedAt: ''
  },
}

const noteDetailReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case SET_NOTE_TO_VIEW: {
      return { ...state, currentSelectedNote: { ...action.payload } };
    }

    case UPDATE_NOTE: {
      return { ...state, currentSelectedNote: { ...state.currentSelectedNote, ...action.payload.changes } }
    }

    case ADD_NOTE: {
      return { ...state, currentSelectedNote: { ...state.currentSelectedNote, ...action.payload } }
    }

    case CLEAR_DETAIL_NOTE_VIEW:
      return { ...state, currentSelectedNote: { title: '', content: '', updatedAt: '' } }
    default:
      return state;
  }
}

export default noteDetailReducer;
