import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {ExpenseListService} from '../shared/expense-list.service';
import {Expense} from '../expenses/expense.model';
import {Subscription} from 'rxjs';
import {BudgetPostListService} from '../shared/budget-post-list.service';
import {Budget} from '../budget/budget.model';
import {BackEndService} from '../back-end.service';

// TODO: get categories from method get category (or something alike)

// categories are placeholder

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private expenseListService: ExpenseListService,
              private budgetListService: BudgetPostListService,
              private backEndService: BackEndService) {}
  expenses: Expense[];
  private expenseSubscription: Subscription;
  private budgetSubscription: Subscription;
  currentMonth = 'ingenmåned';
  currentBudget: Budget;
  currentDate = new Date();

  foodBudget = 700;
  foodExpense =  0;
  ngOnInit() {
    this.backEndService.getBudget(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.expenses = this.expenseListService.getExpenses();
    this.expenseSubscription = this.expenseListService.expensesChanged.subscribe(
      (expenses: Expense[]) => {
        this.expenses = expenses;
      }
    );
    this.budgetSubscription = this.budgetListService.budgetChanged.subscribe(
      (budget: Budget) => {
        this.currentBudget = budget;
        this.currentMonth = new Date(this.currentBudget.year, this.currentBudget.month - 1).toLocaleString('eng-us', { month: 'long' });
      }
    );

    // TODO: Make sure the overconsumption is calculated correctly, and isnt hardcoded
    // TODO: get budged from budget service
    // TODO: handle if expense list is empty
    if  (this.expenses.length > 0) {
    this.foodExpense = this.expenseListService.getExpense(0).amount - this.foodBudget;
    }
    this.loadChart();
  }
  loadChart() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      axisY: {
        suffix: 'kr'
      },
      toolTip: {
        shared: true
      },
      legend: {
        reversed: true,
        verticalAlign: 'center',
        horizontalAlign: 'right'
      },
      data: [{
        type: 'stackedColumn',
        name: 'Budget',
        showInLegend: true,
        xValueFormatString: '######################',
        yValueFormatString: '### "kr"',
        dataPoints: [
          { label: 'Entertainment' , y: this.foodBudget },
          { label: 'Food' , y: 700 },
          { label: 'Electronics', y: 500 },
          { label: 'Other', y: 300 },
          { label : 'test', y: 400},
          { label: 'Other', y: 300 },
          { label : 'test', y: 400},
          { label: 'Other', y: 300 },
          { label : 'test', y: 400},
          { label: 'Other', y: 300 },
          { label : 'test', y: 400}
        ]
      },
        {
          type: 'stackedColumn',
          name: 'Overconsumption',
          showInLegend: true,
          xValueFormatString: '#########################',
          yValueFormatString: '### "kr"',
          dataPoints: [
            { y: 300 },
            { y:  this.foodExpense},
            { y: 500 },
            { y: 200 },
            { y: 500},
            { y: 200 },
            { y: 500},
            { y: 200 },
            { y: 500},
            { y: 200 },
            { y: 500}
          ]
        }
        // TODO: handle over-/underconsumption
      ]
    });
    chart.render();
  }
  }
