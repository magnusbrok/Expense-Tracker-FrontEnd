import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { History } from '../history.model';


@Component({
  selector: 'app-history-selected',
  templateUrl: './history-selected.component.html',
  styleUrls: ['./history-selected.component.css']
})

export class HistorySelectedComponent implements OnInit {
  @Input() historySelected: History;
  @Output() monthSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {

  }
}
