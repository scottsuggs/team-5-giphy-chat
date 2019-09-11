import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.log(event);
  }


}
