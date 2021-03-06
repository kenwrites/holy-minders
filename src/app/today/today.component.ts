import { Component, OnInit, Output } from '@angular/core';
import { HolyDaySearchService } from '../services/holy-day-search.service';
import { Day } from '../definitions/day';
import { catchError } from 'rxjs/operators';
import { MyHolyDaysService } from '../services/my-holy-days.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})

export class TodayComponent implements OnInit {

  today: Day;
  tomorrow: Day;
  month: Day[];
  day: Day;
  days_of_obligation: Day[];
  my_holy_days: Day[];
  header_title: string;
  header_id: string;

  constructor(private holyDaySearch: HolyDaySearchService, 
    private myHolyDays: MyHolyDaysService) {
      this.header_id = "today-hdr"; 
      this.header_title = "Today in the Liturgical Calendar"; 
  }

  ngOnInit() {
    this.getToday();
    // this.getTomorrow();
    // this.getMonth(13);
    // this.getDay(5, 1);
    // this.getDaysOfObligation(2019);
  }

  getToday() {
    this.holyDaySearch.getToday().pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        day => this.today = day,
        error => console.error(error.message),
      );
  }

  getTomorrow() {
    this.holyDaySearch.getTomorrow().pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        day => this.tomorrow = day,
        error => console.error(error.message),
      );
  }

  getMonth(month: number) {
    this.holyDaySearch.getMonth(month).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        mon => this.month = mon,
        error => console.error(error.message),
      );
  }

  getDay(month: number, date: number, year: number = 2019) {
    this.holyDaySearch.getDay(month, date, year)
      .pipe(
        catchError(error => { throw new Error(error.message); })
      )
      .subscribe(
        day => {
          this.day = day;
        },
        error => console.error(error.message),
      );
  }

  getDaysOfObligation(year: number = 2019) {
    this.holyDaySearch.getDaysOfObligation(year).pipe(
      catchError(error => { throw new Error(error.message); })
    )
      .subscribe(
        days => this.days_of_obligation = days,
        error => console.error(error.message),
      );
  }


  addDay(day: Day) {
    this.myHolyDays.addDay(day);
  }

  removeDay(day: Day) {
    this.myHolyDays.removeDay(day);
  }

}