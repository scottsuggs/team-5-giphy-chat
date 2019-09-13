import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss']
})
export class UserPage implements OnInit {
  currentUser: User;
  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.currentUser = this.firebase.getCurrentUser();
  }
}
