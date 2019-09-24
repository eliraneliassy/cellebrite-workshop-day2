import { LoggerService } from './logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loggerService: LoggerService) { }
  click() {
    this.loggerService.log('Hello');
  }
}
