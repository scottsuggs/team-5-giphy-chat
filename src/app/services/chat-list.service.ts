import { Chat } from '../interfaces/chat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatListService {
  chats: Chat[];
  constructor() {}

  getChats(): Chat[] {
    return this.chats;
  }

  private setChats(newArray: Chat[]) {
    this.chats = newArray;
  }
  addChat(newChat: Chat) {
    this.chats.push(newChat);
  }
  removeChat(chat: Chat) {
    this.setChats(this.chats.filter(chatItem => chatItem.id != chat.id));
  }
}
