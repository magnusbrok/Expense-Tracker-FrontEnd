import {Subject} from 'rxjs';
import {Expense} from '../expenses/expense.model';

export class ExpenseListService {
  expensesChanged = new Subject<Expense[]>();
  startedEditing = new Subject<number>();

  expenses: Expense[] = [];

  setExpenses(expenses: Expense[]) {
    this.expenses = expenses;
    this.expensesChanged.next(this.expenses.slice());
  }

  getExpenses() {
    return this.expenses.slice();
  }

  getExpense(index: number) {
    return this.expenses[index];
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
    this.expensesChanged.next(this.expenses.slice());
    console.log(expense);
  }

  updateExpense(index: number, newExpense: Expense) {
    this.expenses[index] = newExpense;
    this.expensesChanged.next(this.expenses.slice());
  }

  deleteExpense(index: number) {
    this.expenses.splice(index, 1);
    this.expensesChanged.next(this.expenses.slice());
  }
}
