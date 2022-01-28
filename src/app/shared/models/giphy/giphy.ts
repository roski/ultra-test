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

export interface GiphyUser {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  avatar_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  banner_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile_url: string;
  username: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  display_name: string;
}

export interface GiphyTerm {
  name: string;
}

export interface GiphyGif {
  type: string;
  id: string;
  slug: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  bitly_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  embed_url: string;
  username: string;
  source: string;
  rating: GiphyContentRating;
  user: GiphyUser;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  source_tld: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  source_post_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  update_datetime: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  create_datetime: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  import_datetime: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  trending_datetime: string;
  images: GiphyImages;
  title: string;
}

export interface GiphyImages {
  original: GiphyImage;
  downsized: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  downsized_large: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  downsized_medium: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  downsized_small: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  downsized_still: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_height: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_height_downsampled: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_height_small: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_height_small_still: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_height_still: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_width: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_width_downsampled: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_width_small: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_width_small_still: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  fixed_width_still: GiphyImage;
  looping: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_still: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_mp4: GiphyImage;
  preview: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  preview_gif: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  preview_webp: GiphyImage;
  source: GiphyImage;
  hd: GiphyImage;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '480w_still': GiphyImage;
}

export interface GiphyImage {
  height?: string;
  width?: string;
  size?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  mp4_size?: string;
  url?: string;
  mp4?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
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
  gifs: null | GiphyGif[];
  gifsPagination: GiphyPagination;
  trending: null | GiphyGif[];
  trendingPagination: GiphyPagination;
}

export const DEFAULT_GIPHY_PAGINATION: GiphyPagination = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_count: 0,
  count: 0,
  offset: 0
};

export const DEFAULT_GIPHY_PAGINATION_LIMIT = 9;
