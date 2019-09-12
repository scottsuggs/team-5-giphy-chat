import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AuthProvider } from "ngx-auth-firebaseui";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  providers = AuthProvider;

  constructor(private navCtrl: NavController,
              private angularFireAuth: AngularFireAuth
) { }

  ngOnInit() {
    console.log(this.angularFireAuth.authState.subscribe(state => console.log(state)))
  }

  loginUser() {
    this.navCtrl.navigateForward('chats');
  }

  printError(event) {
    console.log(event)
  }

}
