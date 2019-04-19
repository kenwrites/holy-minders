
import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from '../services/holy-day-search.service';
import { Day } from '../definitions/day';
import { catchError } from 'rxjs/operators';

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
  days_of_obligation: Day[];

  constructor(public holyDaySearch: HolyDaySearchService) {
  }

  ngOnInit() {
    // this.getToday();
    // this.getTomorrow();
    // this.getMonth(13);
    // this.getDay(4, 1);
    this.getDaysOfObligation(2019);
  }

  getToday() {
    this.holyDaySearch.getToday().pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        day => this.today = day,
        error => console.error(error.message),
      );
  }

  getTomorrow() {
    this.holyDaySearch.getTomorrow().pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        day => this.tomorrow = day,
        error => console.error(error.message),
      );
  }

  getMonth(month: number) {
    this.holyDaySearch.getMonth(month).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        mon => this.month = mon,
        error => console.error(error.message),
      );
  }

  getDay(month: number, date: number, year: number = 2019) {
    this.holyDaySearch.getDay(month, date, year)
      .pipe(
        catchError(error => { throw new Error(error.message); })
      )
      .subscribe(
        day => this.day = day,
        error => console.error(error.message),
      );
  }

  getDaysOfObligation(year: number = 2019) {
    this.holyDaySearch.getDaysOfObligation(year).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        days => {
          console.dir(`days in today component:`);
          console.dir(days);
          this.days_of_obligation = days;
          console.log('days_of_obligation class property:');
          console.dir(this.days_of_obligation); 
        },
        error => console.error(error.message),
      );

  } // end getDaysOfObligation
}
