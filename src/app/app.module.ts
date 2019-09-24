
import { LoggerModule } from '../../projects/cellilog-lib/src/src/app/logger/logger.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerConfig } from 'projects/cellilog-lib/src/src/app/logger/APP_NAME';

export const config: LoggerConfig = {
  appName: 'App1',
  numOfRetry: 3
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.init(config)
  ],
  providers: [
    // { provide: APP_NAME, useValue: 'From AppModule' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
