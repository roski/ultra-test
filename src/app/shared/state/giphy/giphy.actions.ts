import { StateUtils } from '@app-shared/state/state-utils';

const GIPHY_STATE_KEY = '[Giphy]';

/** get trending gifs */
export class GetGiphyTrending {
  static readonly type = StateUtils.buildStateType(
    GIPHY_STATE_KEY,
    'Get Trending gifs'
  );
}

/** search gifs autocomplete*/
export class SearchGiphyGifsAutocomplete {
  static readonly type = StateUtils.buildStateType(
    GIPHY_STATE_KEY,
    'Autocomplete search gifs'
  );

  /**
   * The "constructor"
   *
   * @param searchQuery {string} tags search query
   */
  constructor(public searchQuery: string | null) {}
}

/** search gifs */
export class SearchGiphyGifs {
  static readonly type = StateUtils.buildStateType(
    GIPHY_STATE_KEY,
    'Search gifs'
  );

  /**
   * The "constructor"
   *
   * @param searchQuery {string} tags search query
   * @param page {number} number of page
   */
  constructor(public searchQuery: string | null, public page: number = 1) {}
}
