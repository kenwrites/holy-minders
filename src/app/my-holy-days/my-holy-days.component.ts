import { Component, OnInit } from '@angular/core';
import { Day, FormattedDay } from '../definitions/day';
import { DateObject, process_date_string } from '../scripts/process_date_string';
import { MyHolyDaysService } from '../services/my-holy-days.service';

@Component({
  selector: 'app-my-holy-days',
  templateUrl: './my-holy-days.component.html',
  styleUrls: ['./my-holy-days.component.scss']
})
export class MyHolyDaysComponent implements OnInit {

  my_holy_days: Day[];
  formatted_days: FormattedDay[];

  constructor(private myHolyDays: MyHolyDaysService) { }

  ngOnInit() {
    this.getMyDays();
  }

  getMyDays() {
    this.my_holy_days = this.myHolyDays.getDays();
    this.formatted_days = this.formatDays(this.my_holy_days);
  }

  formatDays(days): FormattedDay[] {
    let formatted_days: FormattedDay[];
    formatted_days = days.map(
      day => {
        const date_obj: DateObject = process_date_string(day.date);
        let formatted_day: FormattedDay = day as FormattedDay;
        formatted_day.JSDate = date_obj.date;
        formatted_day.month = date_obj.month;
        return formatted_day;
      });
    return formatted_days;
  }

  removeDay(day) {
    this.myHolyDays.removeDay(day);
    this.getMyDays();
  }
}
