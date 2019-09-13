import { Component, OnDestroy, OnInit } from '@angular/core';

import { Chat } from '../interfaces/chat';
import { FirebaseService } from '../services/firebase.service';
import { Giphy } from '../interfaces/giphy';
import { GiphyService } from '../services/giphy.service';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit, OnDestroy {
  chat: Chat;
  messages = [];
  trending: any[] = [];
  searched;
  buttonClicked = false;
  chatSubscription: SubscriptionLike;

  constructor(
    private giphyService: GiphyService,
    private fb: FirebaseService
  ) {}

  ngOnInit() {
    this.chatSubscription = this.fb.getChatDocument().subscribe(data => {
      this.chat = data;
      console.log('chat', this.chat);
    });
  }
  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
  }
  addButtonClicked() {
    console.log('add button clicked');
    this.giphyService.trending().subscribe(gif => {
      this.trending = gif.data;
    });
    this.buttonClicked = true;
    console.log('searched:', this.searched);
  }
  sendGif(item) {
    console.log('gif sent', item);
    const date = this.getDate();
    // this.fb.addChatDocument({label: 'name', timestamp: date, content: item});
    this.chat.messages.push({ label: 'name', timestamp: date, content: item });
    this.fb.updateChatDocument(this.chat.id, this.chat);
    // this.fb.addChatDocument(item);
    this.closeButton();
  }
  closeButton() {
    this.buttonClicked = false;
    this.searched = undefined;
  }
  sendRandomGif() {
    // this.giphyService.random().subscribe(gif => {
    //   const date = this.getDate();
    //   this.chat.messages.push({
    //     label: 'name',
    //     timestamp: date,
    //     content: gif.data
    //   });
    //   console.log(gif.data);
    //   this.fb.updateChatDocument(this.chat.id, this.chat);
    // });
  }
  searchSubmitted(event) {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    this.giphyService.search(searchTerm).subscribe(gif => {
      this.searched = gif.data;
      console.log(this.searched);
    });
  }
  getDate() {
    const today = new Date();
    const timestamp =
      today.getHours() +
      ':' +
      today.getMinutes() +
      ' on ' +
      (today.getMonth() + 1) +
      '/' +
      today.getDate() +
      '/' +
      today.getFullYear();
    return timestamp;
  }
}
