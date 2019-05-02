import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from './services/holy-day-search.service';
import { MyHolyDaysService } from './services/my-holy-days.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'holy-minders-angular';

  constructor(private holyDaySearch: HolyDaySearchService,
    private myHolyDays: MyHolyDaysService) {

  }

  ngOnInit() {
    this.makeNewUser();
  }

  makeNewUser() {
    this.holyDaySearch.getDaysOfObligation(2019).pipe(
      catchError(error => { throw new Error(error.message); })
    ).subscribe(
      days => this.myHolyDays.makeNewUser(days),
      error => console.error(error.message),
    );
  }

}
