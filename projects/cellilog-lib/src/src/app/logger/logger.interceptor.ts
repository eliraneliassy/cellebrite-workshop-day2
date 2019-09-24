
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Inject } from '@angular/core';
import { APP_NAME } from './APP_NAME';
export class LoggerInterceptor implements HttpInterceptor {

    constructor(@Inject(APP_NAME) private appName: string) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        console.group(`Message from ${this.appName} Logger:`);
        console.log(req.url);
        console.groupEnd();
        return next.handle(req);
    }

}