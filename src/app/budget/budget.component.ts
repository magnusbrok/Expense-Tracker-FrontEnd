import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor() {}


  ngOnInit() {
      const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Oversigt over dine seneste udgifter '
        },
        data: [{
          type: 'pie',
          showInLegend: true,
          toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
          indexLabel: '{name} - #percent%',
          dataPoints: [
            { y: 450, name: 'Apple' },
            { y: 120, name: 'Mango' },
            { y: 300, name: 'Orange' },
            { y: 800, name: 'Banana' },
            { y: 150, name: 'Pineapple' }
          ]
        }]
      });

      chart.render();
    }
}
