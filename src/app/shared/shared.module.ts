/** shared modules */
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@app-core/core.module';
import { DotsLoadingComponent, GifComponent } from '@app-shared/components';
import { GiphyRenditionPipe } from '@app-shared/pipes';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

/** shared ngb modules */
const sharedModules = [
  RouterModule,
  CommonModule,
  CoreModule,
  NgxMasonryModule,
  FormsModule,
  ReactiveFormsModule,
  NgbPaginationModule,
  MarkdownModule
];

/** shared components */
const sharedComponents: any[] = [DotsLoadingComponent, GifComponent];

/** shared directives */
const sharedDirectives: any[] = [];

/** shared pipes */
const sharedPipes: any[] = [GiphyRenditionPipe];

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
