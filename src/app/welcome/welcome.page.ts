import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage implements OnInit {
  providers = AuthProvider;

  constructor(
    private navCtrl: NavController,
    private angularFireAuth: AngularFireAuth,
  ) {}

  ngOnInit() {
    console.log(
      this.angularFireAuth.authState.subscribe(state => console.log(state))
    );
  }

  loginUser() {
    // this.firebase.setCurrentUser();
    this.navCtrl.navigateForward('chats');
  }

  printError(event) {
    console.log(event);
  }
}
