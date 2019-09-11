import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.page.html',
  styleUrls: ['./add-chat.page.scss']
})
export class AddChatPage implements OnInit {
  users: User[];
  query: string;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.firebase.getUsers().subscribe(data => {
      this.users = data;
      console.log('init users', this.users);
    });
  }

  log() {
    console.log('users', this.users);
  }

  addUser(user: User) {
    this.firebase.addUserDocument(user);
  }
}
