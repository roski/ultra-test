import { NgModule } from '@angular/core';

import { GiphyDashboardComponent } from './giphy-dashboard.component';
import { GiphyDashboardRoutingModule } from './giphy-dashboard-routing.module';
import { SharedModule } from '@app-shared/shared.module';
import { GiphySearchComponent } from './giphy-search';
import { GiphyTagsComponent } from './giphy-tags';

/** Giphy dashboard module */
@NgModule({
  declarations: [
    GiphyDashboardComponent,
    GiphySearchComponent,
    GiphyTagsComponent
  ],
  imports: [GiphyDashboardRoutingModule, SharedModule]
})
export class GiphyDashboardModule {}
