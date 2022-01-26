import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

/**
 * Custom preload service strategy
 *
 * defines the preloading behavior depend on data params  of route
 *
 * Example of routes data params:
 *   data: {
 *     preload: true,
 *     delay: true
 *   }
 */
@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => any): Observable<any> {
    const loadRoute = (delay: number) =>
      delay ? timer(5000).pipe(map(() => load())) : load();
    return route.data && route.data.preload
      ? loadRoute(route.data.delay)
      : of(null);
  }
}
