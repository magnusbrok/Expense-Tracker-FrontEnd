import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

// TODO: make dates dynamic
// TODO: get categories from method get category (or something alike)
// TODO: make values dynamic - get from expenses/history and budget

// y-values in dataPoints are placeholder
// categories are placeholder

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  underholdningBudget = 300;
  underholdningExpense = 200;
  ngOnInit() {
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
            { label: 'Underholdning' , y: this.underholdningBudget },
            { label: 'Mad' , y: 700 },
            { label: 'Elektronik', y: 500 },
            { label: 'Andet', y: 300 }
          ]
        },
        {
          type: 'stackedColumn',
          name: 'Overconsumption',
          showInLegend: true,
          xValueFormatString: '#########################',
          yValueFormatString: '### "kr"',
          dataPoints: [
            { y: this.underholdningExpense },
            { y:  800 - 700},
            {y: 500 },
            {y: 200 }
          ]
        }
        ]
    });
    chart.render();
  }
  }
