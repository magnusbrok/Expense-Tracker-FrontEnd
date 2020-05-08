import {Expense} from '../expenses/expense.model';
import {Budget} from '../budget/budget.model';

export class History {
  public month: string;
  public totalBudget: number;
  public totalExpenses: number;
  public total: number;

  constructor(public  budget: Budget, public expenses: Expense[]) {
    this.calculateTotalBudget();
    this.calculateTotalExpenses();
    this.month = new Date(this.budget.year, this.budget.month - 1).toLocaleString('eng-us', { month: 'long' });
  }

  calculateTotalBudget() {
    this.totalBudget = 0;
    for (const post of this.budget.posts) {
      this.totalBudget += post.amount;
    }
  }

  calculateTotalExpenses() {
    this.totalExpenses = 0;
    for (const expenses of this.expenses) {
      this.totalExpenses += expenses.amount;
    }
  }
}
