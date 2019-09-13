import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Observable, SubscriptionLike } from 'rxjs';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../interfaces/user';
import { tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit, OnDestroy {
  chats: Chat[];
  subscription: SubscriptionLike;
  currentUser: User = this.firebase.getCurrentUser();

  constructor(
    private navCtrl: NavController,
    private firebase: FirebaseService
  ) {}

  ngOnInit() {
    this.subscription = this.firebase.getChats().subscribe(data => {
      this.chats = data;
      console.log('current chats', this.chats);
    });
    console.log('the current user is: ', this.firebase.getCurrentUser());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addChat() {
    this.navCtrl.navigateForward('add-chat');
  }
  openChat(id: string) {
    console.log('/chats setting id to: ', id);

    this.firebase.setChatDocument(id);
    this.navCtrl.navigateForward('chat');
    console.log('opening chat: ', id);
  }
  deleteChat(id: string) {
    console.log('removing chat: ', id);

    this.firebase.removeChatDocument(id);
  }
}
