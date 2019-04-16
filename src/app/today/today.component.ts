// tslint:disable: variable-name


import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from '../holy-day-search.service';
import { DayDetailComponent } from '../day-detail/day-detail.component';
import { Day } from '../definitions/day';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})

export class TodayComponent implements OnInit {

  today: Day;
  tomorrow: Day;
  month: Day[];
  day: Day;
  days_of_ob: Day[] = [];
  have_days_of_obligation: boolean;

  constructor(public holyDaySearch: HolyDaySearchService) {
    this.have_days_of_obligation = false;
  }

  ngOnInit() {
    // this.getToday();
    // this.getTomorrow();
    // this.getMonth(1);
    // this.getDay(4, 1);
    this.getDaysOfObligation(2019);

  }

  getToday() {
    this.holyDaySearch.getToday().subscribe(day => {
      this.today = day;
      console.log('today:');
      console.dir(this.today);
    });
  }

  getTomorrow() {
    this.holyDaySearch.getTomorrow().subscribe(day => {
      this.tomorrow = day;
      console.log('tomorrow:');
      console.dir(this.tomorrow);
    });
  }

  getMonth(month: number) {
    this.holyDaySearch.getMonth(month).subscribe(mon => {
      this.month = mon;
      console.log('month:');
      console.dir(this.month);
    });
  }

  getDay(month: number, date: number, year: number = 2019) {
    this.holyDaySearch.getDay(month, date, year).subscribe(day => {
      this.day = day;
      console.log('day:');
      console.dir(this.day);
    });
  }

  getDaysOfObligation(year: number = 2019) {
    const day_observer = {
      next: day => {
        this.days_of_ob.push(day);
        console.dir(this.days_of_ob);
      },
      error: error => console.error(error.message),
      complete: () => {
        console.log('get_day_requests emitted complete');
        this.have_days_of_obligation = true;
      }
    }; // end day_observer
    this.holyDaySearch.getDaysOfObligation(year).subscribe(day_observer);
  } // end getDaysOfObligation
}
