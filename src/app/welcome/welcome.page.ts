import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  private navCtrl: NavController;

  constructor() { }

  ngOnInit() {
  }

  printUser() {
    this.navCtrl.navigateForward('chat');
  }

  printError() {
  }

}
