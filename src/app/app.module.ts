import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DayDetailComponent } from './day-detail/day-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    DayDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
