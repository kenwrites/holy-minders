import { Injectable } from '@angular/core';
import { callbackify } from 'util';
import { Day } from './definitions/day';

@Injectable({
  providedIn: 'root'
})
export class HolyDaySearchService {
  getToday(): Day {
    let url: string;
    let request: XMLHttpRequest;
    let today: Day;

    url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today';
    request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState < 4) {

        console.log('request readyState: ' + request.readyState);

      } else if (request.readyState === 4) {

        console.log('request readyState: ' + request.readyState);

        if (request.status === 200) {

          console.log('request status: ' + request.status);
          today = JSON.parse(request.response);
          console.log('service says today is:');
          console.log(today);
          return today;

        } else {

          console.log('request status: ' + request.status);

        }
      }
    };

    request.open('GET', url);
    request.send();
  }

  constructor() { }
}
