import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { History } from './history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Output() monthSelected = new EventEmitter<History>();
  histories: History[] = [
    new History('January', 35000, 36000, -1000),
    new History('February', 34000, 32000, 2000),
    new History('March', 41000, 42000, -1000),
    new History('April', 39000, 41000, -2000),
    new History('May', 35000, 36000, -1000),
    new History('June', 34000, 32000, 2000),
    new History('July', 41000, 42000, -1000),
    new History('August', 35000, 36000, -1000),
    new History('September', 34000, 32000, 2000),
    new History('October', 41000, 42000, -1000),
    new History('November', 35000, 36000, -1000),
    new History('December', 34000, 32000, 2000)
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
