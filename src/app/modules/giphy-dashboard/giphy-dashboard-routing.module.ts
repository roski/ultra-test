import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyDashboardComponent } from './giphy-dashboard.component';

/** Giphy dashboard routes */
const giphyDashboardRoutes: Routes = [
  {
    path: '',
    component: GiphyDashboardComponent
  }
];

/**
 * Giphy dashboard routes module
 */
@NgModule({
  imports: [RouterModule.forChild(giphyDashboardRoutes)],
  exports: [RouterModule]
})
export class GiphyDashboardRoutingModule {}
