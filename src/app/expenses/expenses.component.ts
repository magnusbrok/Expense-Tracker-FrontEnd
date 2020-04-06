import {Component, OnDestroy, OnInit} from '@angular/core';
import {Expense} from './expense.model';
import {ExpenseListService} from '../shared/expense-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit, OnDestroy {
  expenses: Expense[];
  private subscription: Subscription;


  constructor(private expenseListService: ExpenseListService) { }

  ngOnInit(): void {
    this.expenses = this.expenseListService.getExpenses();
    this.subscription = this.expenseListService.expensesChanged.subscribe(
      (expenses: Expense[]) => {
        this.expenses = expenses;
      }
    );
  }

  onEditItem(index: number) {
    this.expenseListService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
