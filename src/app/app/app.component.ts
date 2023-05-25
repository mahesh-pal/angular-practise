import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currency = 100;

  constructor() {}

  ngOnInit() {}
}
