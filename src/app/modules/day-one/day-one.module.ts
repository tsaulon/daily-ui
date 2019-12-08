import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayOneRoutingModule } from './day-one-routing.module';
import { DayOneComponent } from './day-one.component';


@NgModule({
  declarations: [
    DayOneComponent
  ],
  imports: [
    CommonModule,
    DayOneRoutingModule
  ],
  exports: [
    DayOneComponent,
  ]
})
export class DayOneModule { }
