import { Component, OnInit } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { FirebaseService } from '../services/firebase.service';
import { NavController } from '@ionic/angular';
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
  currentMembers: User[];
  constructor(
    private chatsService: ChatListService,
    private navCtrl: NavController,
    private firebase: FirebaseService
  ) {}

  ngOnInit() {
    console.log(this.chats);
    this.firebase.getUsers().subscribe(data => (this.currentMembers = data));
  }

  addChat() {
    this.chatsService.addChat({
      members: this.currentMembers,
      id: `${uuidv4()}`
    });
    console.log('chat added');
    let newUser: User = { name: 'kaleb', email: 'twitcherc@gmail.com' };
    console.log(newUser);
    this.firebase.addUserDocument(newUser);
  }

  deleteUser(id: string) {
    console.log('curerentMembers', this.currentMembers);
    this.firebase.removeUserDocument(id);
  }
  handleChatClick(id: string) {
    this.navCtrl.navigateForward('chat');
    console.log('opening chat: ', id);
  }
}
