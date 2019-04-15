// tslint:disable: variable-name

import { Injectable } from '@angular/core';
import { Day } from './definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { make_url } from './make-url';
import { days_of_obligation } from './data/days-of-obligation';

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

  getDaysOfObligation(year: number = 2019): Observable<Day[]> {
    const days: Day[] = [];
    const dates: string[] = days_of_obligation[year];
    // let complete_requests = 0;
    dates.forEach(date => {
      const month = parseInt(date.slice(5, 7), 10);
      const day = parseInt(date.slice(8), 10);
      this.getDay(month, day, year).subscribe(holy_day => {
        days.push(holy_day);
        console.log('days:');
        console.dir(days);
      });
    });

    return of(days);

  } // end getDaysOfObligation
}
