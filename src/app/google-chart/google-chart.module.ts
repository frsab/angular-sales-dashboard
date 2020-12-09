import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ServiceModule } from './service/service.module';
import { GoogleChartRoutingModule } from './google-chart-routing.module';



@NgModule({
  declarations: [LineChartComponent],
  imports: [
    CommonModule,ServiceModule,GoogleChartRoutingModule
  ],
  exports:[
    LineChartComponent
  ]
})
export class GoogleChartModule { }
