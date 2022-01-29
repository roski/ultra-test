import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  DEFAULT_GIPHY_PAGINATION,
  DEFAULT_GIPHY_PAGINATION_LIMIT,
  DEFAULT_GIPHY_TAG_PAGINATION_LIMIT,
  GiphyContentRating,
  GiphyStateModel,
  GiphyTerm
} from '@app-shared/models';
import {
  GetGiphyTrending,
  SearchGiphyGifs,
  SearchGiphyGifsAutocomplete
} from '@app-shared/state/giphy/giphy.actions';
import { GiphyService } from '@app-shared/services';
import { IGif } from '@giphy/js-types';

/**
 *  this state is used for cache and control data from giphy
 */

/** default state */
const defaultGiphyState = (): GiphyStateModel => ({
  trending: null,
  trendingPagination: { ...DEFAULT_GIPHY_PAGINATION },
  gifsPagination: { ...DEFAULT_GIPHY_PAGINATION },
  gifs: null,
  tags: null
});

@State<GiphyStateModel>({
  name: 'giphyState',
  defaults: defaultGiphyState()
})
@Injectable()
export class GiphyState {
  /**
   * The "constructor"
   *
   * @param giphyService the GiphyService injection
   */
  constructor(private readonly giphyService: GiphyService) {}

  @Selector()
  static getTrending(state: GiphyStateModel): null | IGif[] {
    return state.trending;
  }

  @Selector()
  static getGifs(state: GiphyStateModel): null | IGif[] {
    return state.gifs;
  }

  @Selector()
  static getTags(state: GiphyStateModel): null | GiphyTerm[] {
    return state.tags;
  }

  /** Get trending gifs action */
  @Action(GetGiphyTrending)
  getTrendingGifs({ patchState, getState }: StateContext<GiphyStateModel>) {
    return this.giphyService
      .getTrendingGifs(
        GiphyService.preparePaginationQueryParams(
          DEFAULT_GIPHY_PAGINATION_LIMIT,
          1,
          false
        )
      )
      .pipe(
        tap((data) => {
          const prevTrending = getState().trending;
          patchState({
            trending: prevTrending
              ? [...prevTrending, ...data.data]
              : data.data,
            trendingPagination: data.pagination
          });
        })
      );
  }

  /** Search GIFs*/
  @Action(SearchGiphyGifs)
  searchGifs(
    { patchState, getState }: StateContext<GiphyStateModel>,
    { searchQuery, page }: SearchGiphyGifs
  ) {
    return this.giphyService
      .searchGifs({
        q: searchQuery || '',
        ...GiphyService.preparePaginationQueryParams(
          DEFAULT_GIPHY_PAGINATION_LIMIT,
          page,
          true
        ),
        rating: GiphyContentRating.g,
        lang: 'en'
      })
      .pipe(
        tap((res) => {
          const cachedGif = getState().gifs;
          patchState({
            gifs:
              cachedGif && page !== 1 ? [...cachedGif, ...res.data] : res.data,
            gifsPagination: res.pagination
          });
        })
      );
  }

  /** Get tags autocomplete */
  @Action(SearchGiphyGifsAutocomplete)
  getAutocompleteGifs(
    { patchState }: StateContext<GiphyStateModel>,
    { searchQuery }: SearchGiphyGifsAutocomplete
  ) {
    return this.giphyService
      .searchGifsAutocomplete({
        q: searchQuery || '',
        ...GiphyService.preparePaginationQueryParams(
          DEFAULT_GIPHY_TAG_PAGINATION_LIMIT,
          1,
          true
        )
      })
      .pipe(
        tap((res) => {
          patchState({
            tags: res.data
          });
        })
      );
  }
}
