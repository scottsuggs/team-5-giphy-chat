import { RouterModule, Routes } from '@angular/router';

import { AddChatPage } from './add-chat.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SortUsersPipe } from '../pipes/sort-users.pipe';

const routes: Routes = [
  {
    path: '',
    component: AddChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddChatPage, SortUsersPipe]
})
export class AddChatPageModule {}
