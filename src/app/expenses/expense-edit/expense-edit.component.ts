import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ExpenseListService} from '../../shared/expense-list.service';
import {Subscription} from 'rxjs';
import {Expense} from '../expense.model';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) elForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Expense;

  constructor(private expenseListService: ExpenseListService) {}

  ngOnInit(): void {
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
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.elForm.reset();
  }

  onDelete() {
    this.onClear();
    this.expenseListService.deleteExpense(this.editedItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
