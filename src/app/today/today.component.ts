
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
  days_of_ob: Day[] = [];
  have_days_of_obligation: boolean;

  constructor(public holyDaySearch: HolyDaySearchService) {
    this.have_days_of_obligation = false;
  }

  ngOnInit() {
    // this.getToday();
    // this.getTomorrow();
    // this.getMonth(13);
    // this.getDay(4, 1);
    // this.getDaysOfObligation(2019);
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
    const day_observer = {
      // on receiving day, push to days array
      next: day => {
        this.days_of_ob.push(day);
      },
      error: error => console.error(error.message),

      // on 'complete', sort days by date
      complete: () => {
        function by_date(a, b): number {

          // remove non-numeral characters and convert to number
          const not_a_digit = /\D/g;
          const date_a: number = parseInt(a.date.replace(not_a_digit, ''), 10);
          const date_b: number = parseInt(b.date.replace(not_a_digit, ''), 10);

          // sort by date
          if (date_a < date_b) {
            return -1;
          } else if (date_a === date_b) {
            return 0;
          } else if (date_a > date_b) {
            return 1;
          }
        } // end by_date

        this.days_of_ob.sort(by_date);
        this.have_days_of_obligation = true;
      } // end complete
    }; // end day_observer

    this.holyDaySearch.getDaysOfObligation(year).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(day_observer);

  } // end getDaysOfObligation
}
