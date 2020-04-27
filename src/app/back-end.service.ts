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

  domain = `http://localhost:3344`; // TODO: change url to dist.saluton.dk
  budget = `budget`;
  expense = `expense`;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private budgetPostListService: BudgetPostListService,
    private expenseListService: ExpenseListService

    ) { }

  fetchExpenses(username: string) {
    const url = `${ this.domain }/${this.expense}/${username}`;

    this.http.get<Expense[]>(url)
      .subscribe(fetchedExpenses => {
        this.expenseListService.setExpenses(fetchedExpenses);
      });
  }

  getExpenses(){

  }

  createExpense(){

  }

  updateExpense(){

  }

  DeleteExpense(){

  }

  getBudgetList() {
    const url = `${ this.domain }/${this.budget}`;
    return this.http.get<Budget>(url);
  }

  getBudget(year: number, month: number) {

    const username = this.authService.getUser().username;
    const url = `${ this.domain }/${username}/${this.budget}/${ year }/${ month }`;

    this.http.get<Budget>(url)
      .subscribe(budget => {
      this.budgetPostListService.setBudget(budget);
      });
  }

  createBudget(id: number) {
    const username = this.authService.getUser().username;
    const budget = this.budgetPostListService.getCurrentBudget();
    const url = `${ this.domain }/${username}/${this.budget}`;

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
