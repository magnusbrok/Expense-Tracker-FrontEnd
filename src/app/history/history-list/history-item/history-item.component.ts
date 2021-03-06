import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../../history.service';
import {History} from '../../history.model';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})

export class HistoryItemComponent implements OnInit {
  isHistorySelected = false;

  histories: History[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.histories = this.historyService.getHistories();
  }

  onSelected(index: number) {
    this.historyService.historySelected.next(index);
    this.isHistorySelected = !this.isHistorySelected;
    this.historyService.isHistorySelected.next(this.isHistorySelected);
  }
}
