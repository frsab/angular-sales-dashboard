import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit(): void {
  }
  private drawChart(){
    let data = this.gLib.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));
    const geo_1_options = {
      region: 'US',
      resolution: 'provinces',
      width:"3000",
      hAxis: { title: 'Month',width:"33%" },
      vAxis: { title: 'Month',width:"33%" },
      is3D: true,
      legend: {
          numberFormat:'$###,###'
      }
  }

    chart.draw(data,geo_1_options);
  }

}
