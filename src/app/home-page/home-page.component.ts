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
  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Udgifter For Denne Uge'
      },
      axisX: {
        valueFormatString: 'DDD'
      },
      axisY: {
        suffix: ' kr'
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: 'pointer',
        itemclick: toggleDataSeries
      },
      data: [{
        type: 'stackedBar',
        name: 'Indkøb',
        showInLegend: 'true',
        xValueFormatString: 'DD, MMM',
        yValueFormatString: '#Kr',
        dataPoints: [
          { x: new Date(2020, 0, 30), y: 56 },
          { x: new Date(2020, 0, 31), y: 45 },
          { x: new Date(2020, 1, 1), y: 71 },
          { x: new Date(2020, 1, 2), y: 41 },
          { x: new Date(2020, 1, 3), y: 60 },
          { x: new Date(2020, 1, 4), y: 75 },
          { x: new Date(2020, 1, 5), y: 98 }
        ]
      },
        {
          type: 'stackedBar',
          name: 'Underholdning',
          showInLegend: 'true',
          xValueFormatString: 'DD, MMM',
          yValueFormatString: '#Kr',
          dataPoints: [
            { x: new Date(2020, 0, 30), y: 86 },
            { x: new Date(2020, 0, 31), y: 95 },
            { x: new Date(2020, 1, 1), y: 71 },
            { x: new Date(2020, 1, 2), y: 58 },
            { x: new Date(2020, 1, 3), y: 60 },
            { x: new Date(2020, 1, 4), y: 65 },
            { x: new Date(2020, 1, 5), y: 89 }
          ]
        },
        {
          type: 'stackedBar',
          name: 'Bolig',
          showInLegend: 'true',
          xValueFormatString: 'DD, MMM',
          yValueFormatString: '#Kr',
          dataPoints: [
            { x: new Date(2020, 0, 30), y: 48 },
            { x: new Date(2020, 0, 31), y: 45 },
            { x: new Date(2020, 1, 1), y: 41 },
            { x: new Date(2020, 1, 2), y: 55 },
            { x: new Date(2020, 1, 3), y: 80 },
            { x: new Date(2020, 1, 4), y: 85 },
            { x: new Date(2020, 1, 5), y: 83 }
          ]
        },
        {
          type: 'stackedBar',
          name: 'Uni',
          showInLegend: 'true',
          xValueFormatString: 'DD, MMM',
          yValueFormatString: '#Kr',
          dataPoints: [
            { x: new Date(2020, 0, 30), y: 61 },
            { x: new Date(2020, 0, 31), y: 55 },
            { x: new Date(2020, 1, 1), y: 61 },
            { x: new Date(2020, 1, 2), y: 75 },
            { x: new Date(2020, 1, 3), y: 80 },
            { x: new Date(2020, 1, 4), y: 85 },
            { x: new Date(2020, 1, 5), y: 105 }
          ]
        },
        {
          type: 'stackedBar',
          name: 'Andet',
          showInLegend: 'true',
          xValueFormatString: 'DD, MMM',
          yValueFormatString: '#Kr',
          dataPoints: [
            { x: new Date(2020, 0, 30), y: 52 },
            { x: new Date(2020, 0, 31), y: 55 },
            { x: new Date(2020, 1, 1), y: 20 },
            { x: new Date(2020, 1, 2), y: 35 },
            { x: new Date(2020, 1, 3), y: 30 },
            { x: new Date(2020, 1, 4), y: 45 },
            { x: new Date(2020, 1, 5), y: 25 }
          ]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
      if (typeof(e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }

  }
  }
