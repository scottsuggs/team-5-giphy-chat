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
  users: Observable<User[]>;
  query: string;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.users = this.firebase.getUsers();
  }
}
