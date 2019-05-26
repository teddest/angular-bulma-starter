import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CORE_DIRECTIVES } from './directives';

@NgModule({
  declarations: [
    ...CORE_DIRECTIVES
  ],
  exports: [
    ...CORE_DIRECTIVES
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
