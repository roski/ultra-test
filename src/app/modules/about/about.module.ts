import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '@app-shared/shared.module';

/** About module */
@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
