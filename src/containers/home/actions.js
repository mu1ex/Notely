import moment from 'moment';
import ShortId from 'shortid';

export const ADD_NOTE = 'NOTE:ADD';
export const DELETE_NOTE = 'NOTE:DELETE';
export const UPDATE_NOTE = 'NOTE:UPDATE';

export function createNote(content, title) {
  return {
    type: ADD_NOTE,
    payload: {
      content,
      title,
      id: ShortId.generate(),
      updatedAt: moment().toISOString(),
    }
  }
}

export function deleteNote(id) {
  return { type: DELETE_NOTE, payload: id }
}

export function updateNote(id, changes) {
  const updatedChanges = { ...changes, updatedAt: moment().toISOString() }
  return { type: UPDATE_NOTE, payload: { id, changes: updatedChanges } }
}
