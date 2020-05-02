import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HistoryService} from '../../history.service';
import {History} from '../../history.model';


@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})

export class HistoryItemComponent implements OnInit {
  @Output() historySelected = new EventEmitter<void>();
  @Input() history: History;

  histories: History[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.histories = this.historyService.getHistories();
  }

  onSelected() {
    this.historySelected.emit();
  }
}
