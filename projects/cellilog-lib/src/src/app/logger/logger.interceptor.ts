import { LOGGER_CONFIG, LoggerConfig } from './APP_NAME';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Inject } from '@angular/core';
import {retry} from 'rxjs/operators';

export class LoggerInterceptor implements HttpInterceptor {

    constructor(@Inject(LOGGER_CONFIG) private config: LoggerConfig) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        console.group(`Message from ${this.config.appName} Logger:`);
        console.log(req.url);
        console.groupEnd();
        return next.handle(req).pipe(
            retry(this.config.numOfRetry)
        );
    }

}