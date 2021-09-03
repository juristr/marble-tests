import { Action } from '@ngrx/store';

import * as NgrxlibActions from './ngrxlib.actions';
import { NgrxlibEntity } from './ngrxlib.models';
import { State, initialState, reducer } from './ngrxlib.reducer';

describe('Ngrxlib Reducer', () => {
  const createNgrxlibEntity = (id: string, name = ''): NgrxlibEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Ngrxlib actions', () => {
    it('loadNgrxlibSuccess should return the list of known Ngrxlib', () => {
      const ngrxlib = [
        createNgrxlibEntity('PRODUCT-AAA'),
        createNgrxlibEntity('PRODUCT-zzz'),
      ];
      const action = NgrxlibActions.loadNgrxlibSuccess({ ngrxlib });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
