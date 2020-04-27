import {Component, OnInit} from '@angular/core';
import {HistoryService} from './history.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryService]
})

export class HistoryComponent implements OnInit{
  selectedHistory: History;

  constructor() { }

  ngOnInit() {
  }

}
