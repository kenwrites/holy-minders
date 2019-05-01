import { Injectable } from '@angular/core';
import { Day } from '../definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable, zip } from 'rxjs';

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

  makeRequestArray(dates, array_year) {
    let get_day_requests: Observable<Day>[] = [];
    dates.forEach((date) => {
      const month = parseInt(date.slice(5, 7), 10);
      const day = parseInt(date.slice(8), 10);
      const new_get = this.getDay(month, day, array_year);
      get_day_requests.push(new_get);
    });
    return get_day_requests;
  }

  zipDayRequests(dates_array: string[], year: number = 2019): Observable<Day[]> {
    const requests = this.makeRequestArray(dates_array, year);
    const zipped_requests = zip(...requests);
    return zipped_requests;
  } 

  getDaysOfObligation(year: number = 2019): Observable<Day[]> {
    const dates: string[] = days_of_obligation[year];
    const days = this.zipDayRequests(dates, year);
    return days;
  } // end getDaysOfObligation
}
