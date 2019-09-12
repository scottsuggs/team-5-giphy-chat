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
  }

  ngOnInit() {
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
  }
}
