import { Injectable } from '@angular/core';
import { Day } from '../definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';

import { make_url } from '../make-url';
import { days_of_obligation } from '../data/days-of-obligation';

@Injectable({
  providedIn: 'root'
})

export class HolyDaySearchService {

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

  zipDayRequests(dates_array: string[], year: number = 2019): Observable<Day[]> {
    let get_day_requests;

    // prime the pump:  insert 1 http.get into get_day_requests.
    // This will ensure that you can zip new requests with it.

    const date1 = dates_array[0];
    const m1 = parseInt(date1.slice(5, 7), 10);
    const d1 = parseInt(date1.slice(8), 10);
    get_day_requests = this.getDay(m1, d1, year);

    // zip remaining requests with get_day_requests

    dates_array.forEach((date, i) => {
      if (i > 0) {
        const month = parseInt(date.slice(5, 7), 10);
        const day = parseInt(date.slice(8), 10);
        const new_get = this.getDay(month, day, year);
        get_day_requests = zip(get_day_requests, new_get);
      }
    });

    return get_day_requests;

  } // end zipDayRequests

  getDaysOfObligation(year: number = 2019): Observable<Day[]> {
    const days: Day[] = [];
    const dates: string[] = days_of_obligation[year];
    const zipped_requests = this.zipDayRequests(dates, year);
    return zipped_requests;


    // const day_observer = {
    //   // on receiving day, push to days array
    //   next: zipped_days => {
    //     ;
    //   },
    //   error: error => console.error(error.message),

    //   // on 'complete', sort days by date
    //   complete: () => {
    //     function by_date(a, b): number {

    //       // remove non-numeral characters and convert to number
    //       const not_a_digit = /\D/g;
    //       const date_a: number = parseInt(a.date.replace(not_a_digit, ''), 10);
    //       const date_b: number = parseInt(b.date.replace(not_a_digit, ''), 10);

    //       // sort by date
    //       if (date_a < date_b) {
    //         return -1;
    //       } else if (date_a === date_b) {
    //         return 0;
    //       } else if (date_a > date_b) {
    //         return 1;
    //       }
    //     } // end by_date

    //     days.sort(by_date);
    //   } // end complete
    // }; // end day_observer

    // requests.subscribe(day_observer);

    // return of(days);

  } // end getDaysOfObligation
}
