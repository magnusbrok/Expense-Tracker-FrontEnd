import { Component, OnInit } from '@angular/core';
import { History } from '../history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryComponent implements OnInit {
  histories: History[] = [
    new History('January', 30000, 31000, -1000),
    new History('February', 35000, 37000, -2000),
    new History('March', 29000, 25000, +4000),
    new History('March', 34000, 25000, +9000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
