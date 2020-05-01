import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {ExpenseListService} from '../shared/expense-list.service';
import {Expense} from '../expenses/expense.model';
import {Subscription} from 'rxjs';
import {BudgetPostListService} from '../shared/budget-post-list.service';
import {Budget} from '../budget/budget.model';
import {BackEndService} from '../back-end.service';

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
  currentMonth = 'loading';
  currentDate = new Date();
  currentBudget: Budget = new Budget(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
  chartBudget = [];
  chartExpenses = [];
  ngOnInit() {
    if (this.backEndService.firstTimeLogon === true) {
      this.backEndService.getBudget(this.currentBudget.year, this.currentBudget.month);
      this.backEndService.getExpenses(this.currentBudget.year, this.currentBudget.month);
      this.backEndService.firstTimeLogon = false;
    } else {
    this.currentBudget = this.budgetListService.getCurrentBudget();
    this.expenses = this.expenseListService.getExpenses();
    this.currentMonth = new Date(this.currentBudget.year, this.currentBudget.month - 1).toLocaleString('eng-us', { month: 'long' });
    this.loadChart();
    }
    this.expenseSubscription = this.expenseListService.expensesChanged.subscribe(
      (expenses: Expense[]) => {
        this.expenses = expenses;
        this.currentBudget = this.budgetListService.getCurrentBudget();
        this.loadChart();
      }
    );
    this.budgetSubscription = this.budgetListService.budgetChanged.subscribe(
      (budget: Budget) => {
        this.currentBudget = budget;
        this.currentMonth = new Date(this.currentBudget.year, this.currentBudget.month - 1).toLocaleString('eng-us', { month: 'long' });
        this.expenses = this.expenseListService.getExpenses();
        this.loadChart();
      }
    );
  }

  loadChart() {
    let totalExpense = 0;
    this.chartBudget = [];
    this.chartExpenses = [];
    for (const budgetPost of this.currentBudget.posts) {
      totalExpense = 0;
      this.chartBudget.push({label: budgetPost.category, y: budgetPost.amount});
      for (const expense of this.expenses) {
        if (expense.category === budgetPost.category) {
          totalExpense += expense.amount;
        }
      }
      if (totalExpense > budgetPost.amount) {
        this.chartExpenses.push({y: totalExpense - budgetPost.amount});
      } else {
        this.chartExpenses.push({y: 0});
      }
    }

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
        dataPoints: this.chartBudget
      },
        {
          type: 'stackedColumn',
          name: 'Overconsumption',
          showInLegend: true,
          xValueFormatString: '#########################',
          yValueFormatString: '### "kr"',
          dataPoints: this.chartExpenses
        }
      ]
    });
    chart.render();
  }
  }
