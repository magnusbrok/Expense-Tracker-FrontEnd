import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HistoryService} from './history.service';
import {Subscription} from 'rxjs';
import {ExpenseListService} from '../shared/expense-list.service';
import {BudgetPostListService} from '../shared/budget-post-list.service';
import {History} from './history.model';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [HistoryService]
})

export class HistoryComponent implements OnInit{
  selectedHistory: History;
  private subscription: Subscription;
  budgetSub: Subscription;
  isHistorySelected = false;
  historyList: History[] = [];

  constructor(private historyService: HistoryService, private expenseService: ExpenseListService, private budgetListService: BudgetPostListService) { }

  ngOnInit() {
    this.subscription = this.historyService.isHistorySelected.subscribe(
      (historyBoolean: boolean) => {
        this.isHistorySelected = historyBoolean;
      }
    );
    this.historyList.push(new History(this.budgetListService.getCurrentBudget(), this.expenseService.getExpenses()));
    this.historyService.setHistoryList(this.historyList);
  }
}
