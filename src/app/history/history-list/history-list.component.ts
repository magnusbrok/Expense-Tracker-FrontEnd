import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { History } from '../history.model';
import {ActivatedRoute, Params} from '@angular/router';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  id: number;

  histories: History[];

  constructor(private historyService: HistoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.histories = this.historyService.getHistories();
      }
}
