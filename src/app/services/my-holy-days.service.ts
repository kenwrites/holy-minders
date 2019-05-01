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
  }

  // add day

  // remove day

  // provide list of days for current user

  getDays() {
    return this.my_holy_days;
  }

}

