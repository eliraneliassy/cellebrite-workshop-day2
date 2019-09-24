import { LoggerService } from './logger/logger.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(console.log);
  }
  click() {
    // this.loggerService.log('Hello');
  }
}
