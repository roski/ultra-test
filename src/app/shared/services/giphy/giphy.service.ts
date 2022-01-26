import { Injectable } from '@angular/core';
import { ApiUtilsService } from '@app-shared/services';
import { HttpClient } from '@angular/common/http';
import {
  GiphyAutocompleteQueryParams,
  GiphyGif,
  GiphyResponse,
  GiphySearchQueryParams,
  GiphyTerm,
  GiphyTrendingQueryParams
} from '@app-shared/models/giphy/giphy';
import { Observable } from 'rxjs';

/**
 *  Service for communication with Giphy.com API
 */
@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  /**
   * Action url for account api
   */
  private gifsActionUrl: string = '/gifs';

  /**
   * The "constructor"
   *
   * @param api {ApiUtilsService} the api util service injection
   * @param http {HttpClient} the http service injection
   */
  constructor(private api: ApiUtilsService, private http: HttpClient) {}

  /**
   * Get trending gifs
   *
   * @param queryParams {GiphyTrendingQueryParams} trending query params
   * @returns Return Observable of GiphyTrending {Observable<GiphyResponse> }
   */
  getTrendingGifs(
    queryParams: GiphyTrendingQueryParams
  ): Observable<GiphyResponse<GiphyGif>> {
    const params = this.api.buildQueryParams(queryParams);
    return this.http.get<GiphyResponse<GiphyGif>>(
      this.api.getGiphyBackendUrl(`${this.gifsActionUrl}/trending`),
      { params }
    );
  }

  /**
   * Get trending gifs
   *
   * @param queryParams {GiphySearchQueryParams} trending query params
   * @returns Return Observable of GiphyTrending {Observable<GiphyResponse> }
   */
  searchGifs(
    queryParams: GiphySearchQueryParams
  ): Observable<GiphyResponse<GiphyGif>> {
    const params = this.api.buildQueryParams(queryParams);
    return this.http.get<GiphyResponse<GiphyGif>>(
      this.api.getGiphyBackendUrl(`${this.gifsActionUrl}/search`),
      { params }
    );
  }

  /**
   * Get autocomplete tags depend on the gifs search query
   *
   * @param queryParams {GiphyAutocompleteQueryParams} query params for autocomplete tags
   * @returns Return Observable of GiphyTrending {Observable<GiphyResponse> }
   */
  searchGifsAutocomplete(
    queryParams: GiphyAutocompleteQueryParams
  ): Observable<GiphyResponse<GiphyTerm>> {
    const params = this.api.buildQueryParams(queryParams);
    return this.http.get<GiphyResponse<GiphyTerm>>(
      this.api.getGiphyBackendUrl(`${this.gifsActionUrl}/search/tags`),
      { params }
    );
  }
}
