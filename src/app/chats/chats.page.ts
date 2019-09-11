import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
  chats: Observable<Chat[]> = this.chatsService.getChats();

  constructor(
    private chatsService: ChatListService,
    private navCtrl: NavController,
    private firebase: FirebaseService
  ) {}

  ngOnInit() {
    console.log(this.chats);
  }

  addChat() {
    this.navCtrl.navigateForward('add-chat');
  }
  handleChatClick(id: string) {
    this.navCtrl.navigateForward('chat');
    console.log('opening chat: ', id);
  }
}
