import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlegDirective } from './oleg.directive';



@NgModule({
  declarations: [
    OlegDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OlegDirective
  ]
})
export class OlegModule { }
