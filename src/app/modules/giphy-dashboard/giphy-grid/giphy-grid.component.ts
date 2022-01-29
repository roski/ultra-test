import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  GetGiphyTrending,
  GiphyState,
  SearchGiphyGifs
} from '@app-shared/state/giphy';
import { combineLatest, Observable } from 'rxjs';
import { IGif } from '@giphy/js-types';
import { Destroyer } from '@app-shared/models/destroyer';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-giphy-grid',
  templateUrl: './giphy-grid.component.html',
  styleUrls: ['./giphy-grid.component.scss']
})
export class GiphyGridComponent extends Destroyer implements OnInit {
  /** trending gifs selector from ngxs store */
  @Select(GiphyState.getTrending)
  trendingGifs$!: Observable<null | IGif[]>;
  /** search gifs selector from ngxs store */
  @Select(GiphyState.getGifs)
  gifs$!: Observable<{ [key: string]: IGif[] }>;
  /** gifs data */
  gifs: { [key: string]: IGif[] } = {};
  /** current page */
  gifsCurrentPage: number = 1;

  /**
   * The "constructor"
   *
   * @param store the NgXs store service injection
   * @param route$ angular active route service
   */
  constructor(
    protected readonly store: Store,
    protected readonly route$: ActivatedRoute
  ) {
    super();
  }

  /**
   * ngOnInit lifecycle hook
   *
   * @returns nothing
   */
  ngOnInit(): void {
    this.watchRouteParams();
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
        if (!(Object.keys(gifs).length || trending)) {
          this.getTrendingGifs();
        }
        this.gifs = gifs;
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

  /**
   * Watch when search query changed
   *
   * @returns nothing
   */
  private searchGifs(searchQuery: string | null, page: number): void {
    this.store.dispatch(new SearchGiphyGifs(searchQuery, page));
  }

  /**
   * Watch when search query changed
   *
   * @returns nothing
   */
  private watchRouteParams(): void {
    this.route$.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const searchQuery = params.get('s');
        const page = params.get('p');
        if (page) {
          this.gifsCurrentPage = page ? +page : 1;
        }
        if (searchQuery) {
          this.searchGifs(searchQuery, this.gifsCurrentPage);
        }
      });
  }
}
