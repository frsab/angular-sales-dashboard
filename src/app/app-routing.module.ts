import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'chart',
    loadChildren: () =>
      import('./google-chart/google-chart.module').then((m) => m.GoogleChartModule),
  },
  { path: 'chart-js', loadChildren: () => import('./chart-js/chart-js.module').then(m => m.ChartJsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
