import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {BudgetPostListService} from '../shared/budget-post-list.service';
import {Budget} from './budget.model';
import {BudgetPost} from './budgetPost.model';
import {BackEndService} from '../back-end.service';
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
  currBudget: Budget;
  totalAmount = 0;
  currentMonth = 'ingenmåned';
  currDate: Date = new Date();
  constructor(private budgetListService: BudgetPostListService, private backEndService: BackEndService) { }


  ngOnInit(): void {
    this.currBudget = this.budgetListService.getCurrentBudget();
    this.subscription = this.budgetListService.budgetChanged.subscribe(
      (budget: Budget) => {
        this.currBudget = budget;
        this.currentMonth = new Date(this.currBudget.year, this.currBudget.month - 1).toLocaleString('eng-us', { month: 'long' });
      }
    );
    // TODO fix BAD PRACTISE!!!!! -Siff
    this.backEndService.getBudget(this.currDate.getFullYear(), this.currDate.getMonth() + 1).subscribe((budget => {
      this.budgetListService.setBudget(budget);
    }));
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

  onSubmit(f) {

  }

}
