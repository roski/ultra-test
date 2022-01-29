import { NgModule } from '@angular/core';

import { GiphyDashboardComponent } from './giphy-dashboard.component';
import { GiphyDashboardRoutingModule } from './giphy-dashboard-routing.module';
import { SharedModule } from '@app-shared/shared.module';
import { GiphySearchComponent } from './giphy-search';
import { GiphyTagsComponent } from './giphy-tags';
import { GiphyPaginationComponent } from './giphy-pagination';
import { GiphyGridComponent } from './giphy-grid';

/** Giphy dashboard module */
@NgModule({
  declarations: [
    GiphyDashboardComponent,
    GiphySearchComponent,
    GiphyTagsComponent,
    GiphyPaginationComponent,
    GiphyGridComponent
  ],
  imports: [GiphyDashboardRoutingModule, SharedModule]
})
export class GiphyDashboardModule {}
