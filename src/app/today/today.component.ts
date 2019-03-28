import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from '../holy-day-search.service';
import { DayDetailComponent } from '../day-detail/day-detail.component';
import { Day } from '../definitions/day';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  today: Day;

  constructor(public holyDaySearch: HolyDaySearchService) {
  }

  getToday(): Day {
    let today: Day;
    today = this.holyDaySearch.getToday();
    return today;
  }


  ngOnInit() {
    this.today = this.getToday();
    console.log('component says today is');
    console.log(this.today);
  }

}
