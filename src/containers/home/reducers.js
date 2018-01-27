import ShortId from 'shortid';
import moment from 'moment';
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './actions';

const allNotes = [{
  id: ShortId.generate(),
  title: 'This is a sample note.',
  content: 'This is where the content resides. And this can be very very long.',
  updatedAt: moment().toISOString(),
  isHearted: false,
  isFavourite: false,
}]

const initialAppState = {
  allNotes,
}

const notesReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        allNotes: [...state.allNotes, {
          id: ShortId.generate(),
          ...action.payload
        }]
      };
    }

    case UPDATE_NOTE: { // These are sparse updates!
      return {
        ...state,
        allNotes: state.allNotes.map(item => item.id === action.payload.id
          ? { ...item, ...action.payload.changes }
          : item)
      };
    }

    case DELETE_NOTE: {
      return {
        ...state,
        allNotes: state.allNotes.filter(item => item.id !== action.payload)
      }
    }

    default:
      return state;
  }
}

export default notesReducer;
