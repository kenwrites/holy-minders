import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from '../holy-day-search.service';
import { DayDetailComponent } from '../day-detail/day-detail.component';
import { Day } from '../definitions/day';
import { Observable } from 'rxjs';


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

  constructor(public holyDaySearch: HolyDaySearchService) {
  }

  getToday() {
    this.holyDaySearch.getToday().subscribe(day => this.today = day);
  }

  getTomorrow() {
    this.holyDaySearch.getTomorrow().subscribe(day => this.tomorrow = day);
  }

  getMonth(month: number) {
    this.holyDaySearch.getMonth(month).subscribe(mon => this.month = mon);
  }

  getDay(month: number, date: number, year: number = 2019) {
    this.holyDaySearch.getDay(month, date, year).subscribe(day => this.day = day);
  }


  ngOnInit() {
    this.getToday();
    this.getTomorrow();
    this.getMonth(1);
    this.getDay(4, 1);
  }

}
