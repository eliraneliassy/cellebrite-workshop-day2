import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(appName: string, msg: string) {
    console.group(`Message from ${appName} Logger:`);
    console.log(msg);
    console.groupEnd();
  }
}
