import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { chain } from 'underscore';

/**
 *  Service for prepare base url for http request
 *  and make other base manipulation for comfort
 *  working with http
 */
@Injectable({
  providedIn: 'root'
})
export class ApiUtilsService {
  /**
   * Prepare http options
   *
   * @param options  http options like header, params and etc.
   * @returns return prepared http params object
   */
  makeOptions(options?: any): any {
    let headers = new HttpHeaders();
    chain(this.makeHeaders())
      .pairs()
      .each(([k, v]) => {
        headers = headers.set(k, v);
      });
    return { headers, ...options };
  }

  /**
   * Prepare Giphy url for http request
   *
   * @returns return string with url
   */
  getGiphyBackendUrl(url: string = ''): string {
    return environment.giphyApiUrl + url;
  }

  /**
   * Buld http query params
   *
   * @param paramsMap  object with query params map
   * @returns return prepared http params object{ HttpParams}
   */
  buildQueryParams(paramsMap: { [key: string]: any }): HttpParams {
    let params = new HttpParams();
    if (paramsMap && Object.keys(paramsMap).length) {
      Object.keys(paramsMap).forEach((paramName) => {
        switch (true) {
          case this.isHttpParamEmpty(paramsMap[paramName]):
            break;
          case Array.isArray(paramsMap[paramName]):
            const paramString = paramsMap[paramName].join(',');
            params = params.append(paramName, paramString);
            break;
          default:
            params = params.append(paramName, paramsMap[paramName].toString());
        }
      });
    }
    return params;
  }

  /**
   * Prepare http headers
   *
   * @returns return prepared http headers
   */
  private makeHeaders(): any {
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    };
  }

  /**
   * Check that Http query params is not empty and defined
   *
   * @param value value of query param
   * @returns return  checkin result in {boolean} format
   */
  private isHttpParamEmpty(value: any): boolean {
    return (
      value === undefined ||
      value === null ||
      value === '' ||
      (Array.isArray(value) && !value.length)
    );
  }
}
