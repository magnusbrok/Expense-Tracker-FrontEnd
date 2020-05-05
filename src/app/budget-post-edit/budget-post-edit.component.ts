import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Expense} from '../expenses/expense.model';
import {Subscription} from 'rxjs';
import {BudgetPost} from '../budget/budgetPost.model';
import {BudgetPostListService} from '../shared/budget-post-list.service';
import {BackEndService} from '../back-end.service';

@Component({
  selector: 'app-budget-post-edit',
  templateUrl: './budget-post-edit.component.html',
  styleUrls: ['./budget-post-edit.component.css']
})
export class BudgetPostEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', { static: false }) budgetForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: BudgetPost;
  toggle = true;
  status = 'Save Budget';


  constructor(private budgetService: BudgetPostListService, private backEndService: BackEndService) { }

  ngOnInit(): void {
    this.subscription = this.budgetService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.budgetService.getPost(index);
        this.budgetForm.setValue({
          amount: this.editedItem.amount,
          category: this.editedItem.category,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newBudgetPost = new BudgetPost(value.category, value.amount);
    if (this.editMode) {
      this.budgetService.updateBudgetPost(this.editedItemIndex, newBudgetPost);
    } else {
      this.budgetService.addBudgetPost(newBudgetPost);
    }
    this.editMode = false;
    form.reset();
    this.toggle = true;
  }
  onClear() {
    this.editMode = false;
    this.budgetForm.reset();
    this.toggle = true;

  }

  onDelete() {
    this.onClear();
    this.budgetService.deleteBudgetPost(this.editedItemIndex);
    this.toggle = true;
  }

  onSaveBudget() {
    this.backEndService.updateBudget(this.budgetService.getCurrentBudget().year, this.budgetService.getCurrentBudget().month);
    // this.backEndService.updateBudget();
    this.toggle = false;
    this.status = this.toggle ? 'Save Budget' : 'Saved Budget!';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
