import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
  }
  processForm(event) {
    console.log('form submitted');
  }
  handleNameValue(event) {
    const name = event.target.value;
    console.log(name);
  }

}
