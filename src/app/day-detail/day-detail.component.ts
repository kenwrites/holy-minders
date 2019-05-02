import { Component, OnInit, Input } from '@angular/core';
import { Day, Celebration } from '../definitions/day';
import { DateObject, process_date_string } from '../scripts/process_date_string';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  @Input()  day: Day;
  date_obj: DateObject;
  celebrations: Celebration[];

  constructor() { 

  }

  ngOnInit() {

    // extract human-readable day, month, and year from day.date

    this.date_obj = process_date_string(this.day.date);

    // extract title and other celebration details from today's first celebration
    
    if (this.day.celebrations[0]) {
      this.celebrations = this.day.celebrations;
    } else {
      this.celebrations[0].title = "Sorry.  No feasts or special liturgical days today.  Try again tomorrow, there's bound to be something."
    }

  } // end ngOnInit

}
