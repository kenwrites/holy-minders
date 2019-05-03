import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routing

import { AppRoutingModule } from './app-routing.module';

// Components

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { TodayComponent } from './today/today.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { MyHolyDaysComponent } from './my-holy-days/my-holy-days.component';
import { DaySearchComponent } from './day-search/day-search.component';
import { SectionHeaderComponent } from './section-header/section-header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    DayDetailComponent,
    TodayComponent,
    CelebrationComponent,
    MyHolyDaysComponent,
    DaySearchComponent,
    SectionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
