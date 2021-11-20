import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayOneComponent } from './day-one/day-one.component';
import { FocusWithinDirective } from './day-one/focusWithin.directive';

@NgModule({
  declarations: [AppComponent, DayOneComponent, FocusWithinDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
