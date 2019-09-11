import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WelcomePage } from './welcome.page';
import {NgxAuthFirebaseUIModule} from "ngx-auth-firebaseui";

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
    NgxAuthFirebaseUIModule.forRoot(
        {
          apiKey: 'AIzaSyC4VefMM2FhymyN84jN_wo5JH2uL46v5yc',
          authDomain: 'team-5-giphy-chat.firebaseapp.com',
          databaseURL: 'https://team-5-giphy-chat.firebaseio.com',
          projectId: 'team-5-giphy-chat',
          storageBucket: 'team-5-giphy-chat.appspot.com',
          messagingSenderId: '979673138214',
          appId: '1:979673138214:web:33c40671c9403346'
        },
        () => 'team-5-giphy-chat',
        {
          enableFirestoreSync: true, // enable/disable autosync users with firestore
          toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
          toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
          authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
          authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
          passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
          passwordMinLength: 8, // Password length min/max in forms independently of each component min/max.
          // Same as password but for the name
          nameMaxLength: 50,
          nameMinLength: 2,
          // If set, sign-in/up form is not available until email has been verified.
          // Plus protected routes are still protected even though user is connected.
          // guardProtectedRoutesUntilEmailIsVerified: true
        }),
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
