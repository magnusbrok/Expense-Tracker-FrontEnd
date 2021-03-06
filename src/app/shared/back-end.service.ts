import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../expenses/expense.model';
import {ExpenseListService} from './expense-list.service';
import {BudgetPostListService} from './budget-post-list.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {Budget} from '../budget/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {
  domain = `http://dist.saluton.dk:3344`;
  budget = `budget`;
  expense = `expenses`;
  firstTimeLogon = true;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private budgetPostListService: BudgetPostListService,
    private expenseListService: ExpenseListService
  ) {}

  getAllExpenses(username: string) {
    const url = `${ this.domain }/${username}/${this.expense}`;

    this.http.get<Expense[]>(url)
      .subscribe(fetchedExpenses => {
        this.expenseListService.setExpenses(fetchedExpenses);
      });
  }

  getExpenses(year: number, month: number) {

    const username = this.authService.getUser().username;
    const url = `${ this.domain }/${username}/${this.expense}/${ year }/${ month }`;

    this.http.get<Expense[]>(url)
      .subscribe(expenses => {
        this.expenseListService.setExpenses(expenses);
      });
  }

  updateExpense(year: number, month: number) {
    const username = this.authService.getUser().username;
    const expenses = this.expenseListService.getExpenses();
    const url = `${ this.domain }/${username}/${this.expense}/${ year }/${ month }`;

    this.http.put(
      url,
      expenses
    ).subscribe();
  }

  getAllBudgets() {
    const username = this.authService.getUser().username;
    const url = `${ this.domain }/${username}${this.budget}`;
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

  updateBudget(year: number, month: number) {
    const username = this.authService.getUser().username;
    const budget = this.budgetPostListService.getCurrentBudget();
    const url = `${ this.domain }/${username}/${this.budget}/${ year }/${ month }`;

    this.http.post(
      url,
      budget
    ).subscribe();
  }

}
