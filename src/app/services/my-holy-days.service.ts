import { Injectable } from '@angular/core';
import { Day } from '../definitions/day';
import { HolyDaySearchService } from './holy-day-search.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MyHolyDaysService {

  my_holy_days: Day[];
  initial_user_setup: boolean;

  constructor(private holyDaySearchService: HolyDaySearchService) {
    this.initial_user_setup = false;
   }

  // create holy days for new user.  Initial list will just be
  // the holy days of obligation.

  makeNewUser() {
    this.my_holy_days = [];
    const day_observer = {
      // on receiving day, push to days array
      next: day => {
        this.my_holy_days.push(day);
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

        this.my_holy_days.sort(by_date);
        this.initial_user_setup = true;
        return of(this.my_holy_days);
      } // end complete
    }; // end day_observer

    const year = new Date().getFullYear();
    this.holyDaySearchService.getDaysOfObligation(year).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(day_observer);

  } // end makeNewUser

// add day

// remove day

// provide list of days for current user

}
