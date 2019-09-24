import { APP_NAME } from './../../projects/cellilog-lib/src/src/app/logger/APP_NAME';
import { LoggerModule } from '../../projects/cellilog-lib/src/src/app/logger/logger.module';

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
    HttpClientModule,
    LoggerModule.init('From static init')
  ],
  providers: [
    // { provide: APP_NAME, useValue: 'From AppModule' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
