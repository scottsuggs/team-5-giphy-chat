// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC4VefMM2FhymyN84jN_wo5JH2uL46v5yc',
    authDomain: 'team-5-giphy-chat.firebaseapp.com',
    databaseURL: 'https://team-5-giphy-chat.firebaseio.com',
    projectId: 'team-5-giphy-chat',
    storageBucket: 'team-5-giphy-chat.appspot.com',
    messagingSenderId: '979673138214',
    appId: '1:979673138214:web:33c40671c9403346'
  },
  giphy: {
    apiKey: 'VlvVPXjNhFX2o8hyr5r9CRmESCrKas6w'
  },
  firestoreAuth: {
    enableFirestoreSync: true, // enable/disable autosync users with firestore
    toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
    authGuardLoggedInURL: '/chats', // url for authenticated users - to use in combination with canActivate feature on a route
    passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
    passwordMinLength: 8, // Password length min/max in forms independently of each component min/max.
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    // guardProtectedRoutesUntilEmailIsVerified: true,
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
