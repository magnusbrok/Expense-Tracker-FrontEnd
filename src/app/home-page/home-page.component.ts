import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {ExpenseListService} from '../shared/expense-list.service';
import {Expense} from '../expenses/expense.model';
import {Subscription} from 'rxjs';

// TODO: get categories from method get category (or something alike)

// categories are placeholder

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private expenseListService: ExpenseListService) {}
  expenses: Expense[];
  private subscription: Subscription;

  foodBudget = 700;
  foodExpense =  0;
  ngOnInit() {
    this.expenses = this.expenseListService.getExpenses();
    this.subscription = this.expenseListService.expensesChanged.subscribe(
      (expenses: Expense[]) => {
        this.expenses = expenses;
      }
    );
    // TODO: Make sure the overconsumption is calculated correctly, and isnt hardcoded
    // TODO: get budged from budget service
    // TODO: handle if expense list is empty
    if  (this.expenses.length > 0) {
    this.foodExpense = this.expenseListService.getExpense(0).amount - this.foodBudget;
    }
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Expenses This Month'
      },
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
