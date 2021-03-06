import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {BudgetPostListService} from '../shared/budget-post-list.service';
import {Budget} from './budget.model';
import {BudgetPost} from './budgetPost.model';
import {BackEndService} from '../shared/back-end.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) budgetForm: NgForm;
  private subscription: Subscription;
  isHidden = true;
  isAddingPost = false;
  totalAmount = 0;
  currentMonth = 'loading';
  currDate: Date = new Date();
  currBudget: Budget = new Budget(this.currDate.getFullYear(), this.currDate.getMonth());

  constructor(private budgetListService: BudgetPostListService, private backEndService: BackEndService) { }

  ngOnInit(): void {
    this.calcTotalAmount();
    this.currBudget = this.budgetListService.getCurrentBudget();
    this.currentMonth = new Date(this.currBudget.year, this.currBudget.month - 1).toLocaleString('eng-us', { month: 'long' });

    this.subscription = this.budgetListService.budgetChanged.subscribe(
      (budget: Budget) => {
        this.currBudget = budget;
        this.currentMonth = new Date(this.currBudget.year, this.currBudget.month - 1).toLocaleString('eng-us', { month: 'long' });
        this.calcTotalAmount();
      }
    );
  }

  show() {
    this.isHidden = !this.isHidden;
  }
  addBudgetPost() {
    this.isAddingPost = !this.isAddingPost;
    // this.totalAmount = this.currBudget.calcTotalAmount();
  }
  addBudget(form: NgForm) {
    console.log(form);
  }
  onEditItem(index: number) {
    this.budgetListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * Form for changing budget
   * @param form the form received
   */
  onSubmit(form: NgForm) {
    const value = form.value;
    const newBudget = new Budget(value.year, value.month);

    this.currBudget = newBudget;

    this.backEndService.getBudget(this.currBudget.year, this.currBudget.month);
    this.backEndService.getExpenses(this.currBudget.year, this.currBudget.month);
    form.reset();

  }

  calcTotalAmount() {
    this.totalAmount = 0;
    for (const budgetPost of this.budgetListService.getCurrentBudget().posts) {
      this.totalAmount += budgetPost.amount;
    }
  }

}
