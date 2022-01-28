/** shared modules */
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@app-core/core.module';
import { DotsLoadingComponent } from '@app-shared/components';

/** shared ngb modules */
const sharedModules = [RouterModule, CommonModule, CoreModule];

/** shared components */
const sharedComponents: any[] = [DotsLoadingComponent];

/** shared directives */
const sharedDirectives: any[] = [];

/** shared pipes */
const sharedPipes: any[] = [];

/**
 * Shared  module
 *
 * use it for share Components, Services etc.
 * that will be used in different modules of current application
 */
@NgModule({
  imports: [...sharedModules],

  declarations: [...sharedComponents, ...sharedDirectives, ...sharedPipes],

  exports: [
    ...sharedModules,
    ...sharedComponents,
    ...sharedDirectives,
    ...sharedPipes
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
