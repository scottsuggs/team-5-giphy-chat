import { Component, OnDestroy, OnInit } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.page.html',
  styleUrls: ['./add-chat.page.scss']
})
export class AddChatPage implements OnInit, OnDestroy {
  users: User[];
  query: string;
  subscription;

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.subscription = this.firebase.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addChat(user: User) {
    this.firebase.addChatDocument();
  }
}
