import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(msg: string) {
    console.group('Message from Logger:');
    console.log(msg);
    console.groupEnd();
  }
}
