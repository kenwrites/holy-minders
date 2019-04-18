// tslint:disable: variable-name

import { Injectable } from '@angular/core';
import { Day } from './definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable, of, merge } from 'rxjs';

import { make_url } from './make-url';
import { days_of_obligation } from './data/days-of-obligation';

@Injectable({
  providedIn: 'root'
})

export class HolyDaySearchService {

  holy_days: Day[];
  have_holy_days: boolean;

  constructor(private http: HttpClient) {
  }


  getFromApi(args: {
    today?: boolean;
    tomorrow?: boolean;
    month?: number;
    date?: number;
    year?: number;
  }): Observable<Day> & Observable<Day[]> {
    const url: string = make_url(args);
    return this.http.get<Day & Day[]>(url);
  }

  getToday(): Observable<Day> {
    return this.getFromApi({ today: true });
  }

  getTomorrow(): Observable<Day> {
    return this.getFromApi({ tomorrow: true });
  }

  getMonth(month: number): Observable<Day[]> {
    return this.getFromApi({ month });
  }

  getDay(month: number, date: number, year: number = 2019): Observable<Day> {
    return this.getFromApi({ month, date, year });
  }

  mergeDayRequests(dates_array: string[], year: number = 2019): Observable<Day> {
    let get_day_requests: Observable<Day>;

    // prime the pump:  insert 1 http.get into get_day_requests.
    // This will ensure that you can merge new requests with it.

    const date1 = dates_array[0];
    const m1 = parseInt(date1.slice(5, 7), 10);
    const d1 = parseInt(date1.slice(8), 10);
    get_day_requests = this.getDay(m1, d1, year);

    // merge remaining requests with get_day_requests

    dates_array.forEach((date, i) => {
      if (i > 0) {
        const month = parseInt(date.slice(5, 7), 10);
        const day = parseInt(date.slice(8), 10);
        const new_get = this.getDay(month, day, year);
        get_day_requests = merge(get_day_requests, new_get);
      }
    });

    return get_day_requests;

  } // end mergeDayRequests

  getDaysOfObligation(year: number = 2019): Observable<Day> {

    const dates: string[] = days_of_obligation[year];
    const requests = this.mergeDayRequests(dates, year);
    return requests;

  }
}
