import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as NgrxlibActions from './ngrxlib.actions';

@Injectable()
export class NgrxlibEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NgrxlibActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return NgrxlibActions.loadNgrxlibSuccess({ ngrxlib: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return NgrxlibActions.loadNgrxlibFailure({ error });
        },
      })
    )
  );

  someEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NgrxlibActions.someTest),
      map(({ messageType }) => {
        if (messageType === 'success') {
          return NgrxlibActions.someTestSuccess({
            message: 'all good!',
          });
        } else {
          return NgrxlibActions.someTestFailure();
        }
      })
    );
  });

  constructor(private readonly actions$: Actions) {}
}
