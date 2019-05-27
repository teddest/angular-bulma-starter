import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';

import { FEATURE_COMPONENTS } from '.';

@NgModule({
  declarations: [
    ...FEATURE_COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
