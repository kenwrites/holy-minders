import { Component, OnInit, Input } from '@angular/core';
import { Day, Celebration, FormattedDay } from '../definitions/day';
import { DateObject, process_date_string } from '../scripts/process_date_string';
import { days_of_obligation } from '../data/days-of-obligation';
import { MyHolyDaysService } from '../services/my-holy-days.service';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss']
})



export class DaysListComponent implements OnInit {
  @Input() days: Day[];
  formatted_days: FormattedDay[];

  constructor(private myHolyDays: MyHolyDaysService) { }

  ngOnInit() {
    this.formatted_days = this.days.map(
      day => {
        const date_obj: DateObject = process_date_string(day.date);
        let formatted_day: FormattedDay = day as FormattedDay;
        formatted_day.JSDate = date_obj.date;
        formatted_day.month = date_obj.month;
        return formatted_day;
      }

    )
  }

  removeDay(day) {
    this.myHolyDays.removeDay(day);
    console.log(this.days);
  }

}
