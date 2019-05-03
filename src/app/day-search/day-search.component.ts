import { Component, OnInit } from '@angular/core';
import { HolyDaySearchService } from '../services/holy-day-search.service';
import { Day } from '../definitions/day';
import { process_date_string } from '../scripts/process_date_string';
import { catchError } from 'rxjs/operators';
import { MyHolyDaysService } from '../services/my-holy-days.service';

@Component({
  selector: 'app-day-search',
  templateUrl: './day-search.component.html',
  styleUrls: ['./day-search.component.scss']
})
export class DaySearchComponent implements OnInit {
  header_title: string;
  header_id: string;
  results_title: string;
  results_id: string;
  date: Date;
  day: Day;
  date_input: Node;
  day_added: boolean;
  
  constructor(private holyDaySearch: HolyDaySearchService, private myHolyDays: MyHolyDaysService) { 
    this.header_id = "search-hdr"; 
    this.header_title = "Search for a new Holy Day"; 
    this.results_id = "results-hdr";
    this.results_title = "Search Results";
    this.day_added = false;
  }

  ngOnInit() {
    this.date_input = document.querySelector('#date_input');
  }

  getHolyDay(date_string: string) {
    this.day = undefined; // need to find a better solution:  without this line, day_detail doesn't update.  Seems inelegant, though...
    this.day_added = false;
    const date_obj = process_date_string(date_string);
    this.getDay(date_obj.date);
  }

  getDay(date: Date){
    this.holyDaySearch.getDay(
          date.getMonth(), 
          date.getDate(), 
          date.getFullYear()).pipe(
        catchError(error => { throw new Error(error.message); })
      )
      .subscribe(search_result => {
        this.day = search_result;
        console.log(this.day);
      });
  }

  addDay() {
    this.myHolyDays.addDay(this.day);
    this.day_added = true;
  }

}
