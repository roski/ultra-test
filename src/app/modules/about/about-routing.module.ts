import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

/** About page routes */
const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

/**
 * About page routes module
 */
@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
