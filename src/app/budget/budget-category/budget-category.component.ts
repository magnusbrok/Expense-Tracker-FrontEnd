import {Component, Input, OnInit} from '@angular/core';
import {BudgetComponent} from '../budget.component';

@Component({
  selector: 'app-budget-category',
  templateUrl: './budget-category.component.html',
  styleUrls: ['./budget-category.component.css']
})
export class BudgetCategoryComponent implements OnInit {

 @Input() buttonDisabled: BudgetComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
