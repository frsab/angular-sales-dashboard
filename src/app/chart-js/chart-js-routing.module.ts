import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJsComponent } from './chart-js.component';
import {MyLineChartComponent} from './my-line-chart/my-line-chart.component';

const routes: Routes = [
  { path: '', component: ChartJsComponent },
  { path: 'line', component: MyLineChartComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJsRoutingModule { }
