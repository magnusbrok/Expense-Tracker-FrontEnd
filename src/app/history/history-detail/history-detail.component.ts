import {Component, Input, OnInit} from '@angular/core';
import {HistoryService} from '../history.service';
import {History} from '../history.model';


@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})

export class HistoryDetailComponent implements OnInit {
  @Input() history: History;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
  }
}
