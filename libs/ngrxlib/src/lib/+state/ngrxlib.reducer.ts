import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as NgrxlibActions from './ngrxlib.actions';
import { NgrxlibEntity } from './ngrxlib.models';

export const NGRXLIB_FEATURE_KEY = 'ngrxlib';

export interface State extends EntityState<NgrxlibEntity> {
  selectedId?: string | number; // which Ngrxlib record has been selected
  loaded: boolean; // has the Ngrxlib list been loaded
  error?: string | null; // last known error (if any)
}

export interface NgrxlibPartialState {
  readonly [NGRXLIB_FEATURE_KEY]: State;
}

export const ngrxlibAdapter: EntityAdapter<NgrxlibEntity> =
  createEntityAdapter<NgrxlibEntity>();

export const initialState: State = ngrxlibAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const ngrxlibReducer = createReducer(
  initialState,
  on(NgrxlibActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(NgrxlibActions.loadNgrxlibSuccess, (state, { ngrxlib }) =>
    ngrxlibAdapter.setAll(ngrxlib, { ...state, loaded: true })
  ),
  on(NgrxlibActions.loadNgrxlibFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ngrxlibReducer(state, action);
}
