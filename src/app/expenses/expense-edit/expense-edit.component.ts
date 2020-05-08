import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseListService} from '../../shared/expense-list.service';
import {Subscription} from 'rxjs';
import {Expense} from '../expense.model';
import {BudgetPostListService} from '../../shared/budget-post-list.service';
import {Budget} from '../../budget/budget.model';
import {BackEndService} from '../../shared/back-end.service';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) elForm: NgForm;
  subscription: Subscription;
  budgetSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Expense;
  currentBudget: Budget;
  categoryList: string[];

  constructor(private expenseListService: ExpenseListService,
              private budgetListService: BudgetPostListService,
              private backEndService: BackEndService) {}

  ngOnInit(): void {
    this.categoryList = this.budgetListService.getCategoryList();
    this.subscription = this.expenseListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.expenseListService.getExpense(index);
        this.elForm.setValue({
          amount: this.editedItem.amount,
          category: this.editedItem.category,
          date: this.editedItem.date,
          note: this.editedItem.note
        });
      }
    );
    this.currentBudget = this.budgetListService.getCurrentBudget();
    this.budgetSub = this.budgetListService.budgetChanged.subscribe((budget: Budget) => {
      this.categoryList = this.budgetListService.getCategoryList();
      this.currentBudget = this.budgetListService.getCurrentBudget();
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newExpense = new Expense(value.amount, value.category, value.date, value.note);
    if (this.editMode) {
      this.expenseListService.updateExpense(this.editedItemIndex, newExpense);
    } else {
      this.expenseListService.addExpense(newExpense);
    }
    this.editMode = false;
    this.backEndService.updateExpense(this.currentBudget.year, this.currentBudget.month);
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.elForm.reset();
  }

  onDelete() {
    this.onClear();
    this.expenseListService.deleteExpense(this.editedItemIndex);
    this.backEndService.updateExpense(this.currentBudget.year, this.currentBudget.month);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
