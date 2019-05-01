import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../definitions/day';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input()  day: Day;
  date_string: string;
  date_split: number[];
  year: number;
  month_numeral: number;
  day_of_month: number;
  date: Date;
  month: string;
  title: string;

  constructor() { 

  }

  ngOnInit() {

    // extract human-readable day, month, and year from day.date

    this.date_split = this.day.date
      .split('-')
      .map(string => parseInt(string));
    this.year = this.date_split[0];
    this.month_numeral = this.date_split[1];
    this.day_of_month = this.date_split[2];
    this.date = new Date(this.year, this.month_numeral-1, this.day_of_month);
    this.month = this.date.toDateString().split(' ')[1];

    // extract title from today's first celebration
    
    if (this.day.celebrations[0]) {
      this.title = this.day.celebrations[0].title;
    } else {
      this.title = "Sorry.  No feasts or special liturgical days today."
    }

  } // end ngOnInit

}
