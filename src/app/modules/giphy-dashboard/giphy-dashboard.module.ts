import { NgModule } from '@angular/core';

import { GiphyDashboardComponent } from './giphy-dashboard.component';
import { GiphyDashboardRoutingModule } from './giphy-dashboard-routing.module';

/** Giphy dashboard module */
@NgModule({
  declarations: [GiphyDashboardComponent],
  imports: [GiphyDashboardRoutingModule]
})
export class GiphyDashboardModule {}
