import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MODULES } from './modules';
import { DayOneComponent } from './modules/day-one/day-one.component';

@NgModule({
  declarations: [
    AppComponent,
    DayOneComponent,
  ],
  imports: [
    BrowserModule,
    ...MODULES,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
