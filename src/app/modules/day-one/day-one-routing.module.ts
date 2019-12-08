import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DayOneComponent} from './day-one.component';


const routes: Routes = [
  {
    path: 'one',
    component: DayOneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayOneRoutingModule { }
