import { map, includes } from 'lodash';
import { filters } from '../../constants';
import { TOGGLE_FILTER, APPLY_FILTERS, RESET_UNAPPLIED_FILTERS } from './actions';

const defaultFiltersState = map(filters, value => value.key)

const initialFilterState = {
  appliedFilters: [],
  unAppliedFilters: [],
}

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const unAppliedFilters = includes(state.unAppliedFilters, action.payload)
        ? state.unAppliedFilters.filter(item => item !== action.payload)
        : [...state.unAppliedFilters].concat(action.payload)
      return { ...state, unAppliedFilters };
    }

    case APPLY_FILTERS: {
      return { ...state, appliedFilters: state.unAppliedFilters }
    }

    case RESET_UNAPPLIED_FILTERS: {
      return { ...state, unAppliedFilters: state.appliedFilters }
    }

    default:
      return state;
  }
}

export default filterReducer;
