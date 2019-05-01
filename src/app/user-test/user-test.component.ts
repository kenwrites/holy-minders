import { Component, OnInit } from '@angular/core';
import { MyHolyDaysService } from '../services/my-holy-days.service';
import { Day } from '../definitions/day';


@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.scss']
})
export class UserTestComponent implements OnInit {

  my_holy_days: Day[];

  constructor(private myHolyDays: MyHolyDaysService) {
    this.my_holy_days = [];
  }

  ngOnInit() {

  }

  // makeNewUser() {
  //   this.my_holy_days = [];
  //   this.myHolyDays.makeNewUser().subscribe();
  // }

}
