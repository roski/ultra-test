import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  DEFAULT_GIPHY_PAGINATION,
  DEFAULT_GIPHY_PAGINATION_LIMIT,
  DEFAULT_GIPHY_TAG_PAGINATION_LIMIT,
  GiphyContentRating,
  GiphyPagination,
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
import { empty } from 'rxjs/internal/Observer';

/**
 *  this state is used for cache and control data from giphy
 */

/** default state */
const defaultGiphyState = (): GiphyStateModel => ({
  trending: null,
  trendingPagination: { ...DEFAULT_GIPHY_PAGINATION },
  gifsPagination: { ...DEFAULT_GIPHY_PAGINATION },
  gifs: {},
  searchQuery: null,
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

  /** selector of trending gif */
  @Selector()
  static getTrending(state: GiphyStateModel): null | IGif[] {
    return state.trending;
  }

  /** selector of search gif */
  @Selector()
  static getGifs(state: GiphyStateModel): { [key: string]: IGif[] } {
    return state.gifs;
  }

  /** selector of search gif pagination */
  @Selector()
  static getGifsPagination(state: GiphyStateModel): GiphyPagination {
    return state.gifsPagination;
  }

  /** selector of search tags */
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
    { patchState, getState, dispatch }: StateContext<GiphyStateModel>,
    { searchQuery, page }: SearchGiphyGifs
  ) {
    const searchChanged = getState().searchQuery !== searchQuery;
    const pageExist = !!getState().gifs[page];
    if (searchChanged || !pageExist) {
      patchState({
        searchQuery: searchQuery || null
      });
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
            if (searchChanged) {
              dispatch(new SearchGiphyGifsAutocomplete(searchQuery));
            }
            patchState({
              gifs: searchChanged
                ? { [page]: res.data }
                : { ...getState().gifs, [page]: res.data },
              gifsPagination: res.pagination
            });
          })
        );
    } else {
      return empty;
    }
  }

  /** Get tags autocomplete */
  @Action(SearchGiphyGifsAutocomplete)
  getAutocompleteGifs(
    { patchState, getState }: StateContext<GiphyStateModel>,
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
