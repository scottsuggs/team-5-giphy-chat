import { Component, OnInit } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { Giphy } from '../interfaces/giphy';
import { GiphyService } from '../services/giphy.service';
import { Observable } from 'rxjs';
import { RandomGiphy } from '../interfaces/random-giphy';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
  chats: Observable<Chat[]> = this.chatsService.getChats();
  gif: Observable<RandomGiphy>;
  constructor(
    private chatsService: ChatListService,
    private giphy: GiphyService
  ) {}

  ngOnInit() {
    this.gif = this.giphy.random();
    console.log(this.chats);
    console.log(this.gif);
  }

  addChat() {
    this.chatsService.addChat({
      members: ['Kaleb'],
      id: `${uuidv4()}`
    });
    console.log('chat added');
  }
  handleChatClick(id: string) {
    console.log('opening chat: ', id);
  }
}
