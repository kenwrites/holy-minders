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

  constructor(public holyDaySearch: HolyDaySearchService) {
  }

  getToday() {
    this.holyDaySearch.getToday().subscribe(day => this.today = day);
  }


  ngOnInit() {
    this.getToday();
  }

}
