import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from 'ngx-auth-firebaseui';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
    // canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'chats',
    loadChildren: './chats/chats.module#ChatsPageModule'
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatPageModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserPageModule'
  },
  {
    path: 'add-chat',
    loadChildren: './add-chat/add-chat.module#AddChatPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
