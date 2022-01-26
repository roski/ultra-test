import { NgModule } from '@angular/core';
import { CustomPreloadingStrategy } from './preload-strategy.service';

/** Custom preload service strategy */
@NgModule({
  providers: [CustomPreloadingStrategy]
})
export class PreloadingStrategyModule {}
