import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { History } from '../history.model';
import {ActivatedRoute, Params} from '@angular/router';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  id: number;

  histories: History[] = [
    new History('January', 35000, 36000, -1000),
    new History('February', 34000, 32000, 2000),
    new History('March', 41000, 42000, -1000),
    new History('April', 39000, 41000, -2000),
    new History('May', 34000, 32000, 2000),
    new History('June', 41000, 42000, -1000),
    new History('July', 35000, 36000, -1000),
    new History('August', 34000, 32000, 2000),
    new History('September', 41000, 42000, -1000),
    new History('October', 41000, 42000, -1000),
    new History('November', 41000, 42000, -1000),
    new History('December', 41000, 42000, -1000)
  ];

  constructor(private historyService: HistoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        // this.histories = this.historyService.getHistory(this.id);
      }
      );
  }
}
