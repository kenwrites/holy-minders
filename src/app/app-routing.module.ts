import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { MyHolyDaysComponent } from './my-holy-days/my-holy-days.component';
import { DaySearchComponent } from './day-search/day-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/today', pathMatch: 'full'},
  { path: 'today', component: TodayComponent },
  { path: 'my-holy-days', component: MyHolyDaysComponent},
  { path: 'search', component: DaySearchComponent},
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { 

  
}
