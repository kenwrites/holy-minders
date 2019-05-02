import { Component, OnInit, Input } from '@angular/core';
import { Day, Celebration } from '../definitions/day';

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
