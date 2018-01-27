import ShortId from 'shortid';
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './actions';

const initialAppState = {
  allNotes: [{
    id: ShortId.generate(),
    title: 'This is a sample note.',
    content: 'This is a sample note.\nThis is where the content resides. And this shit is very very long.',
    updatedAt: 'Todat at 6:30 PM',
    isStarred: false,
    isFavourite: false,
  }]
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
