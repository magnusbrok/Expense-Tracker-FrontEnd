import {Component, Input, OnInit} from '@angular/core';
import {HistoryService} from '../history.service';
import {History} from '../history.model';
import {Expense} from '../../expenses/expense.model';
import {Subscription} from 'rxjs';
import {ExpenseListService} from '../../shared/expense-list.service';
@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})

export class HistoryDetailComponent implements OnInit {
  @Input() history: History;
  private subscription: Subscription;
  expenses: Expense[];

  constructor(private historyService: HistoryService, private expenseService: ExpenseListService) { }

  ngOnInit(): void {
    this.subscription = this.historyService.historySelected.subscribe(
      (historyIndex: number) => {
        this.history = this.historyService.getHistory(historyIndex);
        this.expenses = this.expenseService.getExpenses();
      }
    );
  }
}
