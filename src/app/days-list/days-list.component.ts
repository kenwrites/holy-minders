import { Component, OnInit, Input } from '@angular/core';
import { Day, Celebration } from '../definitions/day';
import { DateObject, process_date_string } from '../scripts/process_date_string';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss']
})
export class DaysListComponent implements OnInit {
  @Input() days: Day[];

  constructor() { }

  ngOnInit() {
  }
  

}
