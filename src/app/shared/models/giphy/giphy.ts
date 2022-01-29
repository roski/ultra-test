import IGif from '@giphy/js-types/dist/gif';
// In current file I used 'eslint disable' for two reason
// 1. I do not control backend API
// 2. We can create enums with key, and it will fix this problem but for current situation it will be overhead  for demo

export interface GiphyPagination {
  offset: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_count: number;
  count: number;
}

export interface GiphyMeta {
  msg: string;
  status: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  response_id: string;
}

export interface GiphyTerm {
  name: string;
}

export interface GiphyApiKey {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  api_key?: string;
}

export interface GiphyPaginationQueryParams {
  limit: number;
  offset?: number;
}

export interface GiphyRatingQueryParams {
  rating?: GiphyContentRating;
}

export enum GiphyContentRating {
  g = 'g',
  pg = 'pg',
  pg13 = 'pg-13',
  r = 'r'
}

export interface GiphySearchQuery {
  q: string;
}

export interface GiphyTrendingQueryParams
  extends GiphyPaginationQueryParams,
    GiphyRatingQueryParams,
    GiphyApiKey {}

export interface GiphySearchQueryParams
  extends GiphyPaginationQueryParams,
    GiphySearchQuery,
    GiphyRatingQueryParams,
    GiphyApiKey {
  lang: string;
}

export interface GiphyAutocompleteQueryParams
  extends GiphyPaginationQueryParams,
    GiphyRatingQueryParams,
    GiphySearchQuery,
    GiphyApiKey {}

export interface GiphyResponse<T> {
  data: T[];
  pagination?: GiphyPagination;
  meta: GiphyMeta;
}

export interface GiphyStateModel {
  gifs: null | IGif[];
  gifsPagination: GiphyPagination;
  trending: null | IGif[];
  trendingPagination: GiphyPagination;
  tags: null | GiphyTerm[];
}

export const DEFAULT_GIPHY_PAGINATION: GiphyPagination = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_count: 0,
  count: 0,
  offset: 0
};

export const DEFAULT_GIPHY_PAGINATION_LIMIT = 9;
export const DEFAULT_GIPHY_TAG_PAGINATION_LIMIT = 4;
