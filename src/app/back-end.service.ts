import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Expense} from './expenses/expense.model';
import {ExpenseListService} from './shared/expense-list.service';
import {BudgetPostListService} from './shared/budget-post-list.service';
import {AuthenticationService} from './authentication/authentication.service';
import {Budget} from './budget/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  domain = `http://dist.saluton.dk:3040`;
  path = `budget`;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private budgetPostListService: BudgetPostListService,
    private expenseListService: ExpenseListService
    ) { }

  fetchExpenses(username: string) {
    // TODO: change url to dist.saluton.dk
    this.http.get<Expense[]>('http://dist.saluton.dk:3040/expenses/' + username).subscribe(fetchedExpenses => {
      this.expenseListService.setExpenses(fetchedExpenses);
    });
  }

  getBudgetList() {
    const url = `${ this.domain }/${this.path}`;
    return this.http.get<Budget>(url);
  }

  getBudget(year: number, month: number) {

    const username = this.authService.getUser().username;
    const url = `${ this.domain }/${this.path}/${username}/${ year }/${ month }`;

    return this.http.get<Budget>(url);
  }

  createBudget(id: number) {
    const username = this.authService.getUser().username;
    const budget = this.budgetPostListService.getCurrentBudget();
    const url = `${ this.domain }/${username}/${this.path}`;

    this.http.post(
      url,
      budget
    ).subscribe();
  }

  updateBudget(id: number) {

  }

  deleteBudget(id: number) {

  }
}
