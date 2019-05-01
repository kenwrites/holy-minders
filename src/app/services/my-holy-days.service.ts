import { Injectable } from '@angular/core';
import { Day } from '../definitions/day';
import { HolyDaySearchService } from './holy-day-search.service';
import { Observable, of } from 'rxjs';
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

  makeNewUser(days: Day[]) {
    this.my_holy_days = days;
    this.initial_user_setup = true;
    this.sortDays();
  }

  // add day

  addDay(day: Day) {
    this.my_holy_days.push(day);
    this.sortDays();
    console.log(this.my_holy_days);
  }

  // remove day

  // provide list of days for current user

  getDays() {
    return this.my_holy_days;
  }

  // sort my_holy_days by date.  Need to do this after adding a new day,
  // as the new day will likely be out of order.  

  sortDays() {
    
    function extract_date(day: Day): number {
      const date_string = day.date;
      const not_a_digit = /\D/g;
      const date = parseInt(date_string.replace(not_a_digit, ''), 10); 
      return date;
    }

    let byDate = (day1, day2): number => {
      const date1: number = extract_date(day1);
      const date2: number = extract_date(day2);
      return date1 - date2;
    }

    this.my_holy_days.sort(byDate);

  } // end sortDays
 
}

