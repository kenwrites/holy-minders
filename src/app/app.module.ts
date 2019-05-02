import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { TodayComponent } from './today/today.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { DaysListComponent } from './days-list/days-list.component';
import { MyHolyDaysComponent } from './my-holy-days/my-holy-days.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    DayDetailComponent,
    TodayComponent,
    CelebrationComponent,
    DaysListComponent,
    MyHolyDaysComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
