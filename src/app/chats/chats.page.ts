import { Component, OnInit } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { ChatListService } from '../services/chat-list.service';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss']
})
export class ChatsPage implements OnInit {
  chats: Observable<Chat[]> = this.chatsService.getChats();
  constructor(private chatsService: ChatListService) {}

  ngOnInit() {
    // this.chats = this.chatsService.getChats().subscribe()
  }

  addChat() {
    this.chatsService.addChat({
      members: ['Kaleb'],
      id: `${uuidv4()}`
    });
    console.log('chat added');
  }
}
