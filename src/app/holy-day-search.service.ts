// tslint:disable: variable-name

import { Injectable } from '@angular/core';
import { Day } from './definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { make_url } from './make-url';

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

}
