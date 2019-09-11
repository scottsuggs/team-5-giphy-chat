import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NavController} from "@ionic/angular";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase,
              public navCtrl: NavController
  ) {
    this.items = db.list('list').valueChanges();
  }

  signInButtonClicked() {
    console.log('signed in');
   // this.ui.start('#firebaseui-auth-container', {
   //    signInOptions: [
   //      {
   //        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
   //        requireDisplayName: false
   //      },
   //      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   //      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
   //      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
   //      firebase.auth.GithubAuthProvider.PROVIDER_ID
   //    ],
   //    // Other config options...
   //  });
  }

  ngOnInit() {
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
  }
}
