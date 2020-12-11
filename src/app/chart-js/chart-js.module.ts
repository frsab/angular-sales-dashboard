import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartJsRoutingModule } from './chart-js-routing.module';
import { ChartJsComponent } from './chart-js.component';


@NgModule({
  declarations: [ChartJsComponent],
  imports: [
    CommonModule,
    ChartJsRoutingModule
  ]
})
export class ChartJsModule { }
