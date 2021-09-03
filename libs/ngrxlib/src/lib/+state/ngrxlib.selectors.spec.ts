import { NgrxlibEntity } from './ngrxlib.models';
import {
  ngrxlibAdapter,
  NgrxlibPartialState,
  initialState,
} from './ngrxlib.reducer';
import * as NgrxlibSelectors from './ngrxlib.selectors';

describe('Ngrxlib Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNgrxlibId = (it: NgrxlibEntity) => it.id;
  const createNgrxlibEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as NgrxlibEntity);

  let state: NgrxlibPartialState;

  beforeEach(() => {
    state = {
      ngrxlib: ngrxlibAdapter.setAll(
        [
          createNgrxlibEntity('PRODUCT-AAA'),
          createNgrxlibEntity('PRODUCT-BBB'),
          createNgrxlibEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Ngrxlib Selectors', () => {
    it('getAllNgrxlib() should return the list of Ngrxlib', () => {
      const results = NgrxlibSelectors.getAllNgrxlib(state);
      const selId = getNgrxlibId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NgrxlibSelectors.getSelected(state) as NgrxlibEntity;
      const selId = getNgrxlibId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getNgrxlibLoaded() should return the current "loaded" status', () => {
      const result = NgrxlibSelectors.getNgrxlibLoaded(state);

      expect(result).toBe(true);
    });

    it('getNgrxlibError() should return the current "error" state', () => {
      const result = NgrxlibSelectors.getNgrxlibError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
