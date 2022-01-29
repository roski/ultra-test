import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Destroyer } from '@app-shared/models/destroyer';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import {
  SearchGiphyGifsAutocomplete,
  GiphyState
} from '@app-shared/state/giphy';
import { Observable } from 'rxjs';
import { GiphyTerm } from '@app-shared/models';
import { Navigate } from '@ngxs/router-plugin';

/** component with list of autocomplete giphy tags */
@Component({
  selector: 'app-giphy-tags',
  templateUrl: './giphy-tags.component.html',
  styleUrls: ['./giphy-tags.component.scss']
})
export class GiphyTagsComponent extends Destroyer implements OnInit {
  /** tags selector from ngxs store */
  @Select(GiphyState.getTags)
  tags$!: Observable<null | GiphyTerm[]>;
  /** search query string */
  searchQuery: string | null = null;

  /**
   * The "constructor"
   *
   * @param route$ angular active route service
   * @param store the NgXs store service injection
   */
  constructor(
    protected readonly route$: ActivatedRoute,
    protected readonly store: Store
  ) {
    super();
  }

  /**
   * ngOnInit lifecycle hook
   *
   * @returns nothing
   */
  ngOnInit(): void {
    this.watchSearchQuery();
  }

  /**
   * trackById track items by gif id
   *
   * @param index item index
   * @returns number
   */
  trackByIndex(index: number): number {
    return index;
  }

  /**
   * Search gifs
   *
   * @return nothing
   */
  searchGifs(query: string): void {
    this.store.dispatch(new Navigate([], { s: query }));
  }

  /**
   * Watch when search query changed
   *
   * @returns nothing
   */
  private watchSearchQuery(): void {
    this.route$.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.searchQuery = params.get('s');
        this.getSearchTags(this.searchQuery);
      });
  }

  /**
   * search tags
   *
   * @param query {string} tags search query
   * @returns nothing
   */
  private getSearchTags(query: string | null): void {
    this.store.dispatch(new SearchGiphyGifsAutocomplete(query));
  }
}
