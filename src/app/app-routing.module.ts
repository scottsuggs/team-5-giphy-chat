import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule )
  },
  { path: 'chats', loadChildren: './chats/chats.module#ChatsPageModule'},
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule'},
  { path: 'user', loadChildren: './user/user.module#UserPageModule'},
  { path: 'users', loadChildren: './user/users/users.module#UsersPageModule'},
  { path: 'add-chat', loadChildren: './add-chat/add-chat.module#AddChatPageModule'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
