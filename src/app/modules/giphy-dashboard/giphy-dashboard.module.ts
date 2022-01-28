import { NgModule } from '@angular/core';

import { GiphyDashboardComponent } from './giphy-dashboard.component';
import { GiphyDashboardRoutingModule } from './giphy-dashboard-routing.module';
import { SharedModule } from '@app-shared/shared.module';

/** Giphy dashboard module */
@NgModule({
  declarations: [GiphyDashboardComponent],
  imports: [GiphyDashboardRoutingModule, SharedModule]
})
export class GiphyDashboardModule {}
