import { Component, OnInit } from '@angular/core';
import { GetGiphyTrending, GiphyState } from '@app-shared/state/giphy';
import { combineLatest, Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { IGif } from '@giphy/js-types';
import { Destroyer } from '@app-shared/models/destroyer';
import { takeUntil } from 'rxjs/operators';

/** Giphy dashboard component */
@Component({
  selector: 'app-giphy-dashboard',
  templateUrl: './giphy-dashboard.component.html',
  styleUrls: ['./giphy-dashboard.component.scss']
})
export class GiphyDashboardComponent extends Destroyer implements OnInit {
  /** trending gifs selector from ngxs store */
  @Select(GiphyState.getTrending)
  trendingGifs$!: Observable<null | IGif[]>;
  /** search gifs selector from ngxs store */
  @Select(GiphyState.getGifs)
  gifs$!: Observable<null | IGif[]>;

  /**
   * The "constructor"
   *
   * @param store the NgXs store service injection
   */
  constructor(private readonly store: Store) {
    super();
  }

  /**
   * ngOnInit lifecycle hook
   *
   * @returns nothing
   */
  ngOnInit(): void {
    this.getStoredGifs();
  }

  /**
   * trackById track items by gif id
   *
   * @param index item index
   * @param item {IGif} item object
   * @returns string|number
   */
  trackById(index: number, item: IGif): string | number {
    return item.id;
  }

  /**
   * getStoredGifs get cached in store gifs
   *
   * @returns nothing
   */
  private getStoredGifs(): void {
    combineLatest([this.gifs$, this.trendingGifs$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([gifs, trending]) => {
        if (!(gifs || trending)) {
          this.getTrendingGifs();
        }
      });
  }

  /**
   * getTrendingGifs get trending gifs
   *
   * @returns nothing
   */
  private getTrendingGifs(): void {
    this.store.dispatch(GetGiphyTrending);
  }
}
