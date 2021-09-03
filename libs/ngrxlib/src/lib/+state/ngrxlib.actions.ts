import { createAction, props } from '@ngrx/store';
import { NgrxlibEntity } from './ngrxlib.models';

export const init = createAction('[Ngrxlib Page] Init');

export const someTest = createAction(
  '[Ngrxlib/API] Some test',
  props<{ messageType: 'success' | 'error' }>()
);

export const someTestSuccess = createAction(
  '[Ngrxlib/API] Some test success',
  props<{ message: string }>()
);
export const someTestFailure = createAction('[Ngrxlib/API] Some test Error');

export const loadNgrxlibSuccess = createAction(
  '[Ngrxlib/API] Load Ngrxlib Success',
  props<{ ngrxlib: NgrxlibEntity[] }>()
);

export const loadNgrxlibFailure = createAction(
  '[Ngrxlib/API] Load Ngrxlib Failure',
  props<{ error: any }>()
);
