import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayOneRoutingModule } from './day-one-routing.module';
import { DayOneComponent } from './day-one.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DayOneComponent
  ],
  imports: [
    CommonModule,
    DayOneRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    DayOneComponent,
  ]
})
export class DayOneModule { }
