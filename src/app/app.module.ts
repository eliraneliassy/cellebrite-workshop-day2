import { LoggerService } from './logger/logger.service';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerModule } from './logger/logger.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true, deps: [LoggerService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
