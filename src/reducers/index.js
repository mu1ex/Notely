import { combineReducers } from 'redux'
import { INITIALISE_APP } from './actions';
import noteDetail from '../containers/noteDetail/reducers';
import notes from '../containers/home/reducers';
import filters from '../containers/filters/reducers';

const initialAppState = {
  init: false,
}

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case INITIALISE_APP:
      return { ...state, init: true }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: appReducer,
  noteDetail,
  notes,
  filters,
})

export default rootReducer