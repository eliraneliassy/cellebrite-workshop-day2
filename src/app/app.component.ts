import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private swUpdate: SwUpdate) { }

  ngOnInit(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe();

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }

  }
}

