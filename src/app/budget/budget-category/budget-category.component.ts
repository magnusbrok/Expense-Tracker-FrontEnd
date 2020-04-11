import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BudgetComponent} from '../budget.component';
import {NgForm} from '@angular/forms';
import {BudgetModel} from '../budget.model';
import {BudgetListService} from '../../shared/budget-list.service';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budget-category.component.html',
  styleUrls: ['./budget-category.component.css']
})
export class BudgetCategoryComponent implements OnInit {
  @ViewChild('f', { static: false }) elForm: NgForm;
 @Input() buttonDisabled: BudgetComponent;
  constructor(private budgetListService: BudgetListService) {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newBudget = new BudgetModel(value.overAllBudget, value.date);
    this.budgetListService.addBudget(newBudget);
    form.reset();
  }
  ngOnInit() {
      }
}
