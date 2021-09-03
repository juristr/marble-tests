import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NGRXLIB_FEATURE_KEY, State, ngrxlibAdapter } from './ngrxlib.reducer';

// Lookup the 'Ngrxlib' feature state managed by NgRx
export const getNgrxlibState =
  createFeatureSelector<State>(NGRXLIB_FEATURE_KEY);

const { selectAll, selectEntities } = ngrxlibAdapter.getSelectors();

export const getNgrxlibLoaded = createSelector(
  getNgrxlibState,
  (state: State) => state.loaded
);

export const getNgrxlibError = createSelector(
  getNgrxlibState,
  (state: State) => state.error
);

export const getAllNgrxlib = createSelector(getNgrxlibState, (state: State) =>
  selectAll(state)
);

export const getNgrxlibEntities = createSelector(
  getNgrxlibState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getNgrxlibState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getNgrxlibEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
