import { Component, OnInit } from '@angular/core';
import { Day, Celebration } from '../definitions/day';
import { MyHolyDaysService } from '../services/my-holy-days.service';

@Component({
  selector: 'app-my-holy-days',
  templateUrl: './my-holy-days.component.html',
  styleUrls: ['./my-holy-days.component.scss']
})
export class MyHolyDaysComponent implements OnInit {

  my_holy_days: Day[]

  constructor(private myHolyDays: MyHolyDaysService) { }

  ngOnInit() {

  }

  getMyDays() {
    this.my_holy_days = this.myHolyDays.getDays();
  }

}
