import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users = [];
  constructor() { }

  ngOnInit() {
  }
  processForm() {
    console.log('form submitted');
  }
  handleNameValue() {

  }

}
