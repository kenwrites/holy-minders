import { Component, OnInit, Input } from '@angular/core';
import { Celebration } from '../definitions/day';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.scss']
})
export class CelebrationComponent implements OnInit {

  @Input()  celebration: Celebration;

  constructor() { }

  ngOnInit() {
  }

}
