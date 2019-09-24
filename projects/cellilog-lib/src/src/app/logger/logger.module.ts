import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true, deps: [LoggerService] }

  ]
})
export class LoggerModule { }
