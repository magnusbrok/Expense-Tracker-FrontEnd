import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { History} from './history.model';
import {Expense} from '../expenses/expense.model';
import {Budget} from '../budget/budget.model';

@Injectable()
export class HistoryService {
  historySelected = new Subject<number>();
  isHistorySelected = new Subject<boolean>();

  expenses: Expense[] = [
    new Expense(3000, 'Husleje', new Date(), '' ),
    new Expense(100, 'Rejsekort', new Date(), '' ),
    new Expense(500, 'Warzone', new Date(), '' )
  ];

  expenses2: Expense[] = [
    new Expense(30000, 'Rejse', new Date(), '' ),
    new Expense(30, 'Kebab', new Date(), '' ),
    new Expense(1500, 'Shopping', new Date(), '' )
  ];

  private histories: History[] = [
    new History(new Budget(2020, 1), this.expenses),
    new History(new Budget(2020, 2), this.expenses2)
  ];

  getHistories() {
    return this.histories.slice();
  }

  getHistory(index: number) {
    return this.histories[index];
  }

  setHistoryList(historyList: History[]) {
    this.histories = historyList;
  }
}
