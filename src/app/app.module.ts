import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@app-shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components';
import { environment } from '../environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { stateList } from '@app-shared/state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { MarkdownModule } from 'ngx-markdown';

/**
 * Main application root module
 */
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    NgxsModule.forRoot([...stateList], {
      developmentMode: !environment.production
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MarkdownModule.forRoot({ loader: HttpClientModule })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
