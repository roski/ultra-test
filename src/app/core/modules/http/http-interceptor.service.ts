import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

/** Http Interceptor  service */
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  /**
   * Http interceptor hook
   *
   * @param request {HttpRequest<any>} the outgoing request object to handle.
   * @param next {HttpRequest<any>} the next interceptor in the chain, or the backend if no interceptors remain in the chain.
   * @returns Observable<HttpEvent<any>>
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newParams = new HttpParams({ fromString: request.params.toString() });
    if (request.url.includes(environment.giphyApiUrl)) {
      newParams = newParams.append('api_key', environment.giphyApiKey);
    }
    const requestClone = request.clone({
      params: newParams
    });
    return next.handle(requestClone).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
