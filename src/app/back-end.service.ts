import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Expense} from './expenses/expense.model';
import {ExpenseListService} from './shared/expense-list.service';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient, private expenseListService: ExpenseListService) { }

  fetchExpenses(username: string) {
    // TODO: change url to dist.saluton.dk
    this.http.get<Expense[]>('http://localhost:3344/expenses/' + username).subscribe(fetchedExpenses => {
      this.expenseListService.setExpenses(fetchedExpenses);
    });
  }
}
