import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HistoryService} from './history.service';
import {History} from './history.model';
import {Subscription} from 'rxjs';
import {ExpenseListService} from '../shared/expense-list.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryService]
})

export class HistoryComponent implements OnInit{
  selectedHistory: History;
  private subscription: Subscription;
  isHistorySelected = false;

  constructor(private historyService: HistoryService, private expenseService: ExpenseListService) { }

  ngOnInit() {
    this.subscription = this.historyService.isHistorySelected.subscribe(
      (historyBoolean: boolean) => {
        this.isHistorySelected = historyBoolean;
      }
    );
  }
}
