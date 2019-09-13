import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { FirebaseService } from '../services/firebase.service';
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
    private firebase: FirebaseService
  ) {}

  ngOnInit() {
    console.log(
      this.angularFireAuth.authState.subscribe(user => {
        this.firebase.setCurrentUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          gifs: []
        });
      })
    );
  }


  loginUser() {
    // this.firebase.setCurrentUser();
    this.navCtrl.navigateForward('chats');
  }

  printError(event) {
  }
}
