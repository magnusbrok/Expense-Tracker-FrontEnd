import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {BudgetModel} from './budget.model';
import {BudgetListService} from '../shared/budget-list.service';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  isHidden = true;
  budgetList: BudgetModel[];
  private subscription: Subscription;
  constructor(private budgetListService: BudgetListService) { }

  show() {
    this.isHidden = !this.isHidden;
  }
  addBudget(form: NgForm) {
    console.log(form);
  }
  ngOnInit(): void {
    this.budgetList = this.budgetListService.getBudgets();
    this.subscription = this.budgetListService.budgetChange.subscribe(
      (budgetList: BudgetModel[]) => {
        this.budgetList = budgetList;
      }
    );
  }
}
