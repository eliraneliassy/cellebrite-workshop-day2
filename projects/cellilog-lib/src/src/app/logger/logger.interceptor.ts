import { LoggerService } from './logger.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export class LoggerInterceptor implements HttpInterceptor {

    constructor(private loggerService: LoggerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        this.loggerService.log('App1', req.url);
        return next.handle(req);
    }

}