import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
})
export class IndexComponent implements OnInit {
  loggedIn = true;
  isAdmin = false;

  constructor() {}

  ngOnInit(): void {}

  updateURL(event: object) {
    console.log(event);
  }
}
