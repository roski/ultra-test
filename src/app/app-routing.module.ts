import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Application routes */
const routes: Routes = [];

/**
 * Main app routes module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
