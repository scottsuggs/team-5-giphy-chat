import { RouterModule, Routes } from '@angular/router';

import { ChatsPage } from './chats.page';
import { CommonModule } from '@angular/common';
import { FilterChatsPipe } from '../pipes/filter-chats.pipe';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ChatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatsPage, FilterChatsPipe]
})
export class ChatsPageModule {}
