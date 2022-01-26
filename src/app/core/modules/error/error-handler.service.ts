import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

/** Simple Error handler service */
@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  /**
   * Handle error hook
   *
   * @param error {Error | HttpErrorResponse | any} app error
   * @returns nothing
   */
  handleError(error: Error | HttpErrorResponse | any): void {
    console.error('ERROR: ', error);
  }
}
