import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";
import {AngularFireAuthModule} from "@angular/fire/auth";

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      NgxAuthFirebaseUIModule,
      AngularFireAuthModule
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
