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

  // getFromApi(args: {
  //   today?: boolean;
  //   tomorrow?: boolean;
  //   month?: number;
  //   date?: number;
  //   year?: number;
  // }) {
  //   const url: string = make_url(args);
  //   return this.http.get<Day>(url);
  // }

  // getToday(): Observable<Day> {
  //   const today = this.getFromApi({ today: true });
  //   return today;
  // }

  getToday(): Observable<Day> {
    const url = make_url({ today: true });
    return this.http.get<Day>(url);
  }

  getTomorrow() {
    const url = make_url({ tomorrow: true });
    return this.http.get<Day>(url);
  }

  getMonth(month: number) {
    const url = make_url({ month });
    return this.http.get<Day[]>(url);
  }

  getDay(month: number, date: number, year: number = 2019) {
    const url = make_url({ month, date, year });
    return this.http.get<Day>(url);
  }

}
