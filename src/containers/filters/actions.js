export const TOGGLE_FILTER = 'TOGGLE:FILTER';
export const APPLY_FILTERS = 'APPLY:FILTERS';
export const RESET_UNAPPLIED_FILTERS = 'RESET:UNAPPLIED:FILTERS';

export function toggleFilter(filter) {
  return { type: TOGGLE_FILTER, payload: filter }
}

export function applyFilters() {
  return { type: APPLY_FILTERS }
}

export function resetUnappliedFilters() {
  return { type: RESET_UNAPPLIED_FILTERS }
}
