import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BudgetPostListService} from './shared/budget-post-list.service';
import {AuthenticationService} from './authentication/authentication.service';
import {Budget} from './budget/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  domain = `http://localhost:3344`;
  path = `budget`;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private budgetPostListService: BudgetPostListService
  ) { }

  getBudgetList() {
    const url = `${ this.domain }/${this.path}`;
    return this.http.get<Budget>(url);
  }

  getBudget(year: number, month: number) {

    const username = this.authService.getUser().username;
    const url = `${ this.domain }/${username}/${this.path}?year=${ year }&month=${ month }`;

    return this.http.get<Budget>(url);
  }

  createBudget(id: number) {
    const username = this.authService.getUser().username;
    const budget = this.budgetPostListService.getCurrentBudget();
    const url = `${ this.domain }/${username}/${this.path}`;

    this.http.post(
      url,
      budget
    );
  }

  updateBudget(id: number) {

  }

  deleteBudget(id: number) {

  }
}
