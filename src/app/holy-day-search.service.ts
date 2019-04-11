import { Injectable } from '@angular/core';
import { Day } from './definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolyDaySearchService {

  constructor(private http: HttpClient) {
  }

  getToday(): Observable<Day> {
    const url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
    return this.http.get<Day>(url);
  }

  getTomorrow(): Observable<Day> {
    const url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/tomorrow';
    return this.http.get<Day>(url);
  }

  getMonth(month: number): Observable<Day[]> {
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/2019/${month}`;
    return this.http.get<Day[]>(url);
  }

  getDay(month: number, date: number, year: number) {
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${year}/${month}/${date}`;
    return this.http.get<Day>(url);
  }

}
