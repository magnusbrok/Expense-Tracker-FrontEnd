import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { History } from '../history.model';
import {ActivatedRoute} from '@angular/router';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  @Output() historyWasSelected = new EventEmitter<History>();
  histories: History[];

  constructor(private historyService: HistoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.histories = this.historyService.getHistories();
  }

  onHistorySelected(history: History) {
    this.historyWasSelected.emit(history);
  }
}
