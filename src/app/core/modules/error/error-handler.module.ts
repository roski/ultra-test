import { ErrorHandler, NgModule } from '@angular/core';

import { ErrorHandlerService } from './error-handler.service';

/** Simple Error handler module  */
@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
export class ErrorHandlerModule {}
