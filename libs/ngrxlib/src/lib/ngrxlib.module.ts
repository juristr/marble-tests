import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgrxlib from './+state/ngrxlib.reducer';
import { NgrxlibEffects } from './+state/ngrxlib.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNgrxlib.NGRXLIB_FEATURE_KEY,
      fromNgrxlib.reducer
    ),
    EffectsModule.forFeature([NgrxlibEffects]),
  ],
})
export class NgrxlibModule {}
