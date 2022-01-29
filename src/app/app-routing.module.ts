import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_PATHS } from '@app-shared/models';
import { AboutModule } from './modules/about';
import { GiphyDashboardModule } from './modules/giphy-dashboard';
import { CustomPreloadingStrategy } from '@app-core/modules';

/** Application routes */
const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES_PATHS.giphyDashboard,
    pathMatch: 'full'
  },
  {
    path: ROUTES_PATHS.giphyDashboard,
    loadChildren: (): Promise<GiphyDashboardModule> =>
      import('./modules/giphy-dashboard').then((m) => m.GiphyDashboardModule)
  },
  {
    path: ROUTES_PATHS.aboutPage,
    loadChildren: (): Promise<AboutModule> =>
      import('./modules/about').then((m) => m.AboutModule),
    data: {
      preload: true,
      delay: true
    }
  },
  {
    path: '**',
    redirectTo: ROUTES_PATHS.aboutPage,
    pathMatch: 'full'
  }
];

/**
 * Main app routes module
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
