import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as NgrxlibActions from './ngrxlib.actions';
import { NgrxlibEffects } from './ngrxlib.effects';

describe('NgrxlibEffects', () => {
  let actions: Observable<Action>;
  let effects: NgrxlibEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        NgrxlibEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(NgrxlibEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: NgrxlibActions.init() });

      const expected = hot('-a-|', {
        a: NgrxlibActions.loadNgrxlibSuccess({ ngrxlib: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });

  describe('someEffect$', () => {
    it('should return a success action', () => {
      // setup the action to submit to the effect
      actions = hot('-a|', {
        a: NgrxlibActions.someTest({ messageType: 'success' }),
      });

      const expected = hot('-a|', {
        a: NgrxlibActions.someTestSuccess({ message: expect.any(String) }),
      });

      // assert
      expect(effects.someEffect$).toBeObservable(expected);
    });
  });
});
