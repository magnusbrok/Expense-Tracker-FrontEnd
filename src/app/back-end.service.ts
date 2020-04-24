import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BudgetModel} from "./budget/budget.model";
import {BudgetListService} from "./shared/budget-list.service";

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  domain : string= `http://localhost:3344`;
  path : string = `budget`;

  constructor(
    private http: HttpClient,
    private budgetListService : BudgetListService
  ) { }

  getBudgetList(){
    let url = `${ this.domain }/${this.path}`;
    return this.http.get<BudgetModel>(url);
  }

  getBudget(year : number, month : number){
    let url = `${ this.domain }/${this.path}?year=${ year }&month=${ month }`;

    return this.http.get<BudgetModel>(url);
  }

  createBudget(id : number){
    let budget = this.budgetListService.getBudget(id);
    let url = `${this.domain}//${this.path}`;

    this.http.post(
      url,
      budget
    )
  }

  updateBudget(id : number){

  }

  deleteBudget(id: number){

  }
}
