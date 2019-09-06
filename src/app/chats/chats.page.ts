import { Component, OnInit } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { Giphy } from '../interfaces/giphy';
import { GiphyService } from '../services/giphy.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
  chats: Observable<Chat[]> = this.chatsService.getChats();
  gifs: Observable<Giphy>;
  constructor(
    private chatsService: ChatListService,
    private giphy: GiphyService
  ) {}

  ngOnInit() {
    this.gifs = this.giphy.search('cats');
    console.log(this.chats);
    console.log(this.gifs);
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
