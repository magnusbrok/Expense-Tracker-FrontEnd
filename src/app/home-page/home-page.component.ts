import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
// var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      theme: 'dark1',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Expenses This Month'
      },
      data: [{
        type: 'pie',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 450, name: 'Food' },
          { y: 120, name: 'Insurance' },
          { y: 300, name: 'Traveling' },
          { y: 800, name: 'Housing' },
          { y: 150, name: 'Education' },
          { y: 150, name: 'Shopping'},
          { y: 250, name: 'Others' }
        ]
      }]
    });

    chart.render();
  }

}
