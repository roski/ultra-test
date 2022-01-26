import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ErrorHandlerModule,
  HttpInterceptorModule,
  PreloadingStrategyModule
} from '@app-core/modules';

/**
 * Core  module
 *
 * use it for share general services and components
 * if it needs to instantiate  app and load  core functionality
 */
@NgModule({
  imports: [
    CommonModule,
    ErrorHandlerModule,
    HttpInterceptorModule,
    PreloadingStrategyModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
