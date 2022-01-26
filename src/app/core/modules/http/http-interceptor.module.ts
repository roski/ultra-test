import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HttpInterceptorService } from './http-interceptor.service';
import { RouterModule } from '@angular/router';

/** Http Interceptor  module */
@NgModule({
  imports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class HttpInterceptorModule {}
