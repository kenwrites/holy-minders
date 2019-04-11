import { Injectable } from '@angular/core';
import { Day } from './definitions/day';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

}
