import {Component, Input, OnInit} from '@angular/core';
import {HistoryService} from '../../history.service';


@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})

export class HistoryItemComponent implements OnInit {
  @Input() history: History;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
  }


  onSelected() {
    // this.historyService.historySelected.emit(this.history);
  }
}
