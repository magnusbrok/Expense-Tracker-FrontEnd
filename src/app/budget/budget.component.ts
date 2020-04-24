import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {BudgetPostListService} from '../shared/budget-post-list.service';
import {Budget} from './budget.model';
import {BudgetPost} from './budgetPost.model';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  isHidden = true;
  isAddingPost = false;
  currBudget: Budget;
  constructor(private budgetListService: BudgetPostListService) { }


  show() {
    this.isHidden = !this.isHidden;
  }

  addBudgetPost() {
    this.isAddingPost = !this.isAddingPost;
  }
  addBudget(form: NgForm) {
    console.log(form);
  }
  ngOnInit(): void {
    this.currBudget = this.budgetListService.getCurrentBudget();
    this.subscription = this.budgetListService.budgetChanged.subscribe(
      (budget: Budget) => {
        this.currBudget = budget;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
