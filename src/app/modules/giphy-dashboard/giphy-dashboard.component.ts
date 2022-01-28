import { Component, OnInit } from '@angular/core';
import { GetGiphyTrending, GiphyState } from '@app-shared/state/giphy';
import { Observable } from 'rxjs';
import { GiphyGif } from '@app-shared/models';
import { Select, Store } from '@ngxs/store';

/** Giphy dashboard component */
@Component({
  selector: 'app-giphy-dashboard',
  templateUrl: './giphy-dashboard.component.html',
  styleUrls: ['./giphy-dashboard.component.scss']
})
export class GiphyDashboardComponent implements OnInit {
  @Select(GiphyState.getTrending)
  trendingGifs$: Observable<null | GiphyGif[]> | undefined;

  @Select(GiphyState.getGifs)
  gifs$: Observable<null | GiphyGif[]> | undefined;

  /**
   * The "constructor"
   *
   * @param store the NgXs store service injection
   */
  constructor(private readonly store: Store) {}

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
   * @param item {GiphyGif} item object
   * @returns string
   */
  trackById(index: number, item: GiphyGif): string {
    return item.id;
  }

  /**
   * getStoredGifs get cached in store gifs
   *
   * @returns nothing
   */
  private getStoredGifs(): void {
    this.gifs$?.subscribe((gifs) => {
      if (!gifs) {
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
