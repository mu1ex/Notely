export const SET_NOTE_TO_VIEW = 'SET:NOTE:TO:VIEW';
export const CLEAR_DETAIL_NOTE_VIEW = 'CLEAR:DETAIL:NOTE:VIEW';

export function setNotetoView(payload) {
  return { type: SET_NOTE_TO_VIEW, payload }
}

export function clearDetailNoteData() {
  return { type: CLEAR_DETAIL_NOTE_VIEW }
}
