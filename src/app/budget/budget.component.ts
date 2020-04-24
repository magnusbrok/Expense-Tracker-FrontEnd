import {Component, OnInit} from '@angular/core';
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
export class BudgetComponent implements OnInit {
  isHidden = true;
  isAddingPost = false;
  budgetList: Budget[];
  currBudget: Budget = new Budget(2020, 4);
  currBudgetPosts: BudgetPost[] = this.currBudget.postList;
  private subscription: Subscription;
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
    this.budgetList = this.budgetListService.getBudgets();
    this.subscription = this.budgetListService.budgetChange.subscribe(
      (budgetList: Budget[]) => {
        this.budgetList = budgetList;
      }
    );
  }

}
