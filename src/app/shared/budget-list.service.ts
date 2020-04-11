import {BudgetModel} from '../budget/budget.model';
import {Subject} from 'rxjs';

export class BudgetListService {
  budgetChange = new Subject<BudgetModel[]>();
  budgetList: BudgetModel[] = [];

  getBudgets() {
    return this.budgetList.slice();
  }
  getBudget(index: number) {
    return this.budgetList[index];
  }
  addBudget(budget: BudgetModel) {
    this.budgetList.push(budget);
    this.budgetChange.next(this.budgetList.slice());
  }
}
